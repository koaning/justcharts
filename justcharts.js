customElements.define(
    "vega-chart",
    class extends HTMLElement {
        connectedCallback() {
            if(!this.isConnected) return;

            this.shadow = this.attachShadow({mode: 'open'});
            this.el = this.shadow.appendChild(document.createElement("div"));

            // NOTE: required for width: container to work
            this.el.style = "display: block;"

            this.nextEpoch = 0;
            this.epoch = null;

            this.update();

            new MutationObserver(() => this.update()).observe(this, {
                attributeFilter: ["schema-url"],
                attributes: true,
                childList: true,
            });
        }

        update() {
            const epoch = this.epoch = this.nextEpoch++;

            (async () => {
                try {
                    const spec = await this.loadSpec();
                    if(this.epoch != epoch) {
                        return;
                    }

                    if(spec != null) {
                        await vegaEmbed(this.el, spec, {actions: false});
                    } else {
                        while(this.el.firstChild) {
                            this.el.firstChild.remove();
                        }
                    }
                } catch(err) {
                    console.error(err);
                }
            })();
        }

        async loadSpec() {
            const schemaUrl = this.getAttribute("schema-url");
            if(schemaUrl != null) {
                const r = await fetch(schemaUrl);
                return await r.json();
            }

            const inlineSchema = this.textContent.trim();
            if(inlineSchema != "") {
                return JSON.parse(inlineSchema);
            }

            return null;
        }
    }
);
