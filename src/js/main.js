var el = document.createElement('script');

el.src = '<%= path %>/app.js';
document.body.appendChild(el);


try {
    console.log("interactive")
    document.querySelector(".content__main-column--interactive").classList.add("from-content-api");
} catch(err) {
    console.log(err);
}