const currentPage = window.location.pathname.split("/").pop();

const index = blogPosts.indexOf(currentPage);

const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const number = document.getElementById("postNumber");
const bot-prev = document.getElementById("bot-prevBtn");
const bot-next = document.getElementById("bot-nextBtn");

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

/*const bot-number = document.getElementById("bot-postNumber");*/

// Display current position
number.textContent = `${index + 1} / ${blogPosts.length}`;

// Previous button
if (index > 0) {
    bot-prev.href = blogPosts[index - 1];
} else {
    bot-prev.style.visibility = "hidden";
}

// Next button
if (index < blogPosts.length - 1) {
    bot-next.href = blogPosts[index + 1];
} else {
    bot-next.style.visibility = "hidden";
}

