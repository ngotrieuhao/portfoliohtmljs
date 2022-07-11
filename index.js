function sendEmail(params) {
  var tempParams = {
    from_name: document.getElementById("toName").value,
    to_name: document.getElementById("fromName").value,
    message: document.getElementById("msg").value,
  };

  emailjs
    .send("service_6yy46g6", "template_z5qz4ie", tempParams)
    .then(function (res) {
      console.log("success", res.status);
      alert("Sent Message Successfully");
    })
    .catch(function (err) {
      console.log("error", err);
      alert("Failed");
    });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".section-title", { delay: 400 });
sr.reveal(".wrapper", { delay: 400 });

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__button--contact", { delay: 400 });
sr.reveal(".my__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/

sr.reveal(".about section", { delay: 400 });
sr.reveal(".about__title", { delay: 400 });
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/

sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });

/*SCROLL CONTACT*/
sr.reveal(".contact__input", { interval: 200 });
sr.reveal(".contact_name", { interval: 200 });
sr.reveal(".contact_email", { interval: 200 });
sr.reveal(".contact_message", { interval: 200 });
sr.reveal(".contact__container", { interval: 200 });
