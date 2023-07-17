const uploadFileIcon = document.querySelector("span");
const fileInput = document.querySelector("input");

uploadFileIcon.addEventListener("click",function () {
    fileInput.click();
});

fileInput.addEventListener("change",function (e) {
    const {files} = e.target;

    const fileReader = new FileReader();
    for (let file of files) {
        fileReader.onloadend = ({ target: { result } }) => {
            // const { result } =e.target;
            console.log(result);
        };

        fileReader.readAsDataURL(file);
    }
});