function setData() {
    let elementData = document.querySelector(".js-data");

    let data = new Date();

    const objData = {
        year: 'numeric',
        month: 'long',
        weekday: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    elementData.textContent = data.toLocaleDateString("pt-BR", objData);
}

setData();
setInterval(() => {

    setData();

}, 1000);