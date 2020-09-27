
window.onload = function () {
    console.log('Hello');
    addTagsClickHandler();
}
const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        console.log(e)
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags();

        }
    })
}
const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
console.log(tags)
}