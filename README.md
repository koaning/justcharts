<img src="icon.png" width=125 height=125 align="right">

# justcharts

> Just charts. Really.

The goal of this project is to make it incredibly easy to hack together a [vegalite](https://vega.github.io/vega-lite/) dashboard declaratively. The goal is that anything made in the [vegalite editor](https://vega.github.io/editor/#/) can be copied into a static file with ease.

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
            "url": "https://cdn.jsdelivr.net/gh/koaning/justcharts/bigmac.csv",
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

Note the `"widget":"container"` setting. By doing this you're able to set the width/height of the chart directly from the `<vegachart>` html-style property. This is great for relatively widths.

## demo 

You can find a demo [here](https://koaning.github.io/justcharts/).
