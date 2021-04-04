let viewDivs = document.getElementsByClassName('vega-chart');

async function parseSchema(viewdiv){
    let url = viewdiv.attributes['schema-url'].textContent;
    var resp = await fetch(url);
    var schema = await resp.json();
    return schema
}

function parseInlineSchema(viewdiv){
    let inline = JSON.parse(viewdiv.textContent);
    console.log(inline);
    
    let baseSchema = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    }

    let schema = Object.assign({}, baseSchema, inline)
    return schema
}

window.onload = function(){
    for (let index = 0; index < viewDivs.length; index++) {
        if ('schema-url' in viewDivs[index].attributes) {
            parseSchema(viewDivs[index]).then(schema => vegaEmbed(viewDivs[index], schema, {"actions": false}));
        }else{
            console.log(viewDivs[index].textContent)
            var schema = parseInlineSchema(viewDivs[index]);
            vegaEmbed(viewDivs[index], schema, {"actions": false});
        }
    }
}