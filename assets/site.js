/* Afra Ventures — site behaviour
   Plain ES5-safe JS, no dependencies. */

(function () {
  "use strict";

  /* ---------- mobile navigation ---------- */
  var toggle = document.getElementById("navtoggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "CLOSE" : "MENU";
    });
  }

  /* ---------- mark the current page in the nav ---------- */
  var here = location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll("#nav a[href]");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === here) links[i].setAttribute("aria-current", "page");
  }

  /* ---------- year stamp ---------- */
  var years = document.querySelectorAll("[data-year]");
  for (var y = 0; y < years.length; y++) {
    years[y].textContent = String(new Date().getFullYear());
  }

  /* ---------- rupee formatting ---------- */
  function inr(n) {
    n = Math.round(n);
    try {
      return "₹" + n.toLocaleString("en-IN");
    } catch (e) {
      return "₹" + n;
    }
  }

  /* ---------- GymDesk revenue-leak calculator ---------- */
  var calc = document.getElementById("leakcalc");
  if (calc) {
    var f = {
      members: document.getElementById("c-members"),
      fee: document.getElementById("c-fee"),
      lapse: document.getElementById("c-lapse"),
      leads: document.getElementById("c-leads"),
      close: document.getElementById("c-close")
    };
    var out = {
      members: document.getElementById("v-members"),
      fee: document.getElementById("v-fee"),
      lapse: document.getElementById("v-lapse"),
      leads: document.getElementById("v-leads"),
      close: document.getElementById("v-close"),
      total: document.getElementById("o-total"),
      renewLoss: document.getElementById("o-renew"),
      leadLoss: document.getElementById("o-lead"),
      renewBar: document.getElementById("b-renew"),
      leadBar: document.getElementById("b-lead"),
      recover: document.getElementById("o-recover")
    };

    function run() {
      var members = +f.members.value;
      var fee = +f.fee.value;
      var lapse = +f.lapse.value / 100;
      var leads = +f.leads.value;
      var close = +f.close.value / 100;

      /* Renewals that lapse without a follow-up. Each lapsed member is
         counted as the remaining months of a 12-month relationship, valued
         conservatively at 6 months of fees. */
      var lapsedPerYear = members * lapse;
      var renewLoss = lapsedPerYear * fee * 6;

      /* Enquiries that arrive and never get a second contact. Half of the
         enquiries that were never followed up would have closed at the
         gym's own close rate. */
      var unworked = leads * 12 * 0.5;
      var leadLoss = unworked * close * fee * 6;

      var total = renewLoss + leadLoss;
      var max = Math.max(renewLoss, leadLoss, 1);

      out.members.textContent = members;
      out.fee.textContent = inr(fee);
      out.lapse.textContent = Math.round(lapse * 100) + "%";
      out.leads.textContent = leads;
      out.close.textContent = Math.round(close * 100) + "%";

      out.total.textContent = inr(total);
      out.renewLoss.textContent = inr(renewLoss);
      out.leadLoss.textContent = inr(leadLoss);
      out.renewBar.style.width = (renewLoss / max * 100) + "%";
      out.leadBar.style.width = (leadLoss / max * 100) + "%";
      out.recover.textContent = inr(total * 0.3);
    }

    for (var k in f) {
      if (Object.prototype.hasOwnProperty.call(f, k) && f[k]) {
        f[k].addEventListener("input", run);
      }
    }
    run();
  }

  /* ---------- enquiry forms ----------
     No backend is wired yet. The form composes the enquiry and hands it to
     the visitor's email client or to WhatsApp, so nothing is silently lost.
     To switch to a hosted endpoint, set FORM_ENDPOINT below to the POST URL
     and the same form will submit over fetch instead. */

  var FORM_ENDPOINT = "";
  var CONTACT_EMAIL = "hello@afraventures.in";
  var CONTACT_WA = "919944940051";

  var forms = document.querySelectorAll("form[data-enquiry]");
  for (var n = 0; n < forms.length; n++) {
    (function (form) {
      var status = form.querySelector("[data-status]");

      form.addEventListener("submit", function (ev) {
        ev.preventDefault();

        var data = {};
        var fields = form.querySelectorAll("input[name], select[name], textarea[name]");
        for (var j = 0; j < fields.length; j++) {
          data[fields[j].name] = fields[j].value.trim();
        }

        if (!data.name || !data.email) {
          if (status) {
            status.textContent = "Add your name and email so we can reply.";
            status.style.color = "var(--accent)";
          }
          return;
        }

        var subject = "Website enquiry — " + (data.topic || "General") + " — " + data.name;
        var body =
          "Name: " + data.name + "\n" +
          "Email: " + data.email + "\n" +
          "Phone: " + (data.phone || "-") + "\n" +
          "Organisation: " + (data.org || "-") + "\n" +
          "Topic: " + (data.topic || "-") + "\n\n" +
          (data.message || "");

        if (FORM_ENDPOINT) {
          fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          }).then(function () {
            if (status) {
              status.textContent = "Thanks — we have your enquiry and will reply within one working day.";
              status.style.color = "var(--ok)";
            }
            form.reset();
          }).catch(function () {
            if (status) {
              status.textContent = "That did not send. Please email " + CONTACT_EMAIL + " instead.";
              status.style.color = "var(--accent)";
            }
          });
          return;
        }

        var choice = form.getAttribute("data-send") || "email";
        if (choice === "whatsapp") {
          window.open("https://wa.me/" + CONTACT_WA + "?text=" + encodeURIComponent(subject + "\n\n" + body), "_blank");
        } else {
          window.location.href =
            "mailto:" + CONTACT_EMAIL +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);
        }

        if (status) {
          status.textContent = "Your email app should now be open with the enquiry filled in. Send it and we will reply within one working day.";
          status.style.color = "var(--ok)";
        }
      });
    })(forms[n]);
  }

  /* ---------- product filter on the products page ---------- */
  var filter = document.getElementById("stagefilter");
  if (filter) {
    var buttons = filter.querySelectorAll("button[data-stage]");
    var rows = document.querySelectorAll("[data-stage-row]");
    for (var b = 0; b < buttons.length; b++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          var want = btn.getAttribute("data-stage");
          for (var c = 0; c < buttons.length; c++) {
            buttons[c].classList.toggle("btn-primary", buttons[c] === btn);
            buttons[c].classList.toggle("btn-ghost", buttons[c] !== btn);
            buttons[c].setAttribute("aria-pressed", buttons[c] === btn ? "true" : "false");
          }
          for (var r = 0; r < rows.length; r++) {
            var stage = rows[r].getAttribute("data-stage-row");
            rows[r].hidden = !(want === "all" || want === stage);
          }
        });
      })(buttons[b]);
    }
  }
})();
