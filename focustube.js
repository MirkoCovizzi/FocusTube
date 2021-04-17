let columns = document.getElementById("columns");

if (columns) {
    let comments = document.getElementById("comments");
    let secondary = document.getElementById("secondary");
    comments.remove();
    secondary.remove();
} else {
    let primary = document.getElementById("primary");
    primary.remove();
}
