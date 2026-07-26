const currentPage = window.location.pathname.split("/").pop();

const index = blogPosts.indexOf(currentPage);

const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

if (index > 0)
    prev.href = blogPosts[index - 1];
else
    prev.style.visibility = "hidden";

if (index < blogPosts.length - 1)
    next.href = blogPosts[index + 1];
else
    next.style.visibility = "hidden";
