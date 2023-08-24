//преобразование формы в JSON с помощью JQuary
function convertFormToJSON(form) {
    const array = $(form).serializeArray();
    const json = {};
    $.each(array, function () {
        json[this.name] = this.value || "";
    });
    return json;
}

function checkResponse(res) {
    if (res.ok) {
        return alert('Запрос прошел успешно');
    }
     return Promise.reject(`Ошибка: ${res.status}`);
}
//пока проходит статус 304
async function request(url, options) {
    return await fetch(url, options).then(checkResponse)
}

function sendData(data) {
    return request(`/form.js`,{
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  }
//обработчик отправки формы, после этого происходит вывод объекта на экран
$("#form").on("submit", function (e) {
    e.preventDefault();
    const form = $(e.target);
    const json = convertFormToJSON(form);
    $(".json-container .json-object").html(JSON.stringify(json));
    return sendData(json)
});
//на данный момент запрос проходит, но объект не возвращается

