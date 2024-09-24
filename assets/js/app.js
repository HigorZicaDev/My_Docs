const content = document.getElementById("content");
// console.log( content );
var md = document.getElementById("title").innerHTML;

let arquivos = ["Bienvenue.md", "Books.md"];

const markdown = fetch(`docs/${md}.md`).then((response) => response.text()).then(text => {
    const converter = new showdown.Converter();
    // console.log(text);
    const html = converter.makeHtml( text );
    // console.log(html);
    content.innerHTML = html;
});

$(function() {
    $("#menu").menu({
        select: function(event, ui) {
            var selectedItem = ui.item.text(); // Captura o texto do item selecionado
            var newTitle = $(".title_doc").text(selectedItem);
            newTitle = selectedItem;
            const markdown = fetch(`docs/${newTitle}.md`).then((response) => response.text()).then(text => {
                const converter = new showdown.Converter();
                // console.log(text);
                const html = converter.makeHtml( text );
                // console.log(html);
                content.innerHTML = html;
            });
        }
    });
});






