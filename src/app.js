document.addEventListener('DOMContentLoaded', function () {
    const taghtml = document.documentElement;
    const switchElement = document.getElementById('switch');

    switchElement.checked = taghtml.classList.contains('dark');

    switchElement.addEventListener('click', function () {
        taghtml.classList.toggle('dark', switchElement.checked);
        console.log('Dark mode toggled:', taghtml.classList.contains('dark'));
    });
});

// const taghtml = document.documentElement; // Selects the <html> tag directly

// document.getElementById('switch').addEventListener('click', function () {
//     taghtml.classList.toggle('dark'); // Toggles the "dark" class
// });