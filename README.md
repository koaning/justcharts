# justcharts

> Just charts. Really.

The goal of this project is to make it incredibly easy to hack together a [vegalite](https://vega.github.io/vega-lite/) dashboard declaratively.

## include 

You can use [jsDelivr](https://www.jsdelivr.com/?docs=gh) to deliver the `justcharts.js` file via CDN. Note
that you'll also need to have some vega dependencies around.

```html
<script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6"></script>
<script src="https://cdn.jsdelivr.net/gh/koaning/justcharts/justcharts.js"></script>
```

## usage

There are two main ways you can create just charts. 

### schema 

You can create a vega based chart directly in html. 

```html
<vegachart schema-url="schemaone.json"></vegachart>
```

### inline 

Alternatively, you can also declare the vegalite-json definition inline in the `vegachart` component. 

```html
<vegachart style="width: 100%">
    {
        "data":{
            "url": "https://localhost:8080/dataset.csv",
            "format": {
                "type": "csv"
            }
        },
        "mark": "line",
        "encoding": {
            "x": {"field": "date", "type": "temporal"},
            "y": {"field": "local_price", "type": "quantitative"},
            "color": {"field": "currency_code", "type": "nominal"}
        },
        "width": "container",
        "title": "hello there"
    }
</vegachart>
```
