const currentPage = window.location.pathname.split("/").pop();

const index = blogPosts.indexOf(currentPage);

const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const number = document.getElementById("postNumber");

// Display current position
number.textContent = `${index + 1} / ${blogPosts.length}`;

// Previous button
if (index > 0) {
    prev.href = blogPosts[index - 1];
} else {
    prev.style.visibility = "hidden";
}

// Next button
if (index < blogPosts.length - 1) {
    next.href = blogPosts[index + 1];
} else {
    next.style.visibility = "hidden";
}
