//sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//slider 
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 4000
});

// Autocomplete 
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Aruba": null,
        "Bora Bora": null,
        "NYC": null,
        "Hawaii": null,
        "Florida": null,
        "Venice": null,
        "Malta": null,
    }
});

//boxed gallery
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

//scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});