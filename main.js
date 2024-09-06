function init() {
    // TODO: remove spundi

    const navbar = document.getElementById('navbar');
    navbar.querySelectorAll("a").forEach((entry) => {
        // we use data attributes here
        // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

        const headingId = entry.dataset.headingId;
        const targetHeading = document.getElementById(headingId);
        entry.addEventListener("click", () => {
            const navbarHeight = navbar.offsetHeight;
            const y = (targetHeading.getBoundingClientRect().top + window.scrollY) - navbarHeight;
            window.scroll({ top: y, behavior: 'smooth' });
        });
    });
}

window.addEventListener("load", init);
