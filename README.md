# Blaze
Web-Frontend-Framework

## class hidden / visible

zum Ein- und Ausblenden von Div-Containern bei unterschiedlichen Viewports.
Die Klasssen `.hidden` und `.visible` sind vom Viewport unabhängig.

| <768px | <992px  | <1200px
------------- | ------------- | ------------- | -------------
hidden      | hidden  | hidden | hidden
hidden-sm   | hidden  | visible | hidden
hidden-md   | visible | hidden  | visible
hidden-lg   | visible | visible | hidden
visible     | visible | visible | visible
visible-sm  | visible | hidden  | hidden
visible-md  | hidden  | visible | hidden
visible-lg  | hidden  | hidden  | visible

Beispiel:
```html
<div class="container">
    <div class="grid">
        <div class="visible-lg">
            Div 1
        </div>
        <div class="grid-sm-4">
            Div 2
        </div>
        <div class="grid-sm-4">
            Div 3
        </div>
    </div>
</div>
```
>Nur bei einem Viewport der größer als 1200 px ist, wird der Container "Div-1" eingeblendet.
