const content = document.getElementById("content");
// console.log( content );
var md = document.getElementById("title").innerHTML;

let arquivos = ["My-Docs.md", "Curriculum.md", "Example-Tree.md", "Routes-Users.md",];

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

            const existingFichier = arquivos.some(item => item.includes(newTitle));
            // console.log(existingFichier);

            if (existingFichier) {
                const url = `docs/${newTitle}.md`;
                const markdown = fetch(url)
                    .then(response => {
                        // console.log(response);
                        // Verifica se a resposta foi bem-sucedida
                        if (!response.ok) {
                            throw new Error('Erro na resposta da requisição'); // Lança um erro se a resposta não for "ok"
                        }
                        
                        return response.text(); // Converte a resposta em TEXT
                    })
                    .then(data => {
                        
                        // Manipula os dados da resposta
                        const converter = new showdown.Converter();
                        // console.log(text);
                        const html = converter.makeHtml( data );
                        // console.log(html);
                        content.innerHTML = html;
                    })
                    .catch(error => {
                        // Captura e trata os erros, como falhas na rede ou na resposta
                        console.error('Erro na requisição:', error);
    
                    })
                    .finally(() => {
                        // Código que será executado independentemente do sucesso ou erro
                        console.log('Requisição finalizada.');
                    });
            } else {
                var newTitle = $(".title_doc").text('');
                // Manipula os dados da resposta
                const converter = new showdown.Converter();
                // console.log(text);
                const data = "<p>Sélectionner l'élément suivant dans le sous-menu !</p>";
                const html = converter.makeHtml( data );
                // console.log(html);
                content.innerHTML = html;
            }

        }
    });
});






