function drawInlineSVG(ctx, rawSVG, callback) {

    var svg = new Blob([rawSVG], {
            type: "image/svg+xml;charset=utf-8"
        }),
        domURL = self.URL || self.webkitURL || self,
        url = domURL.createObjectURL(svg),
        img = new Image;

    img.onload = function() {
        ctx.drawImage(this, 0, 0);
        domURL.revokeObjectURL(url);
        callback(this);
    };

    img.src = url;
}

/*
// usage:
drawInlineSVG(ctxt, svgText, function() {
    console.log(canvas.toDataURL()); // -> PNG data-uri
});
*/


function svgLinearGradient(theta, stretch, stops, attr0) {
    var attr = {
        x1: "0%",
        y1: "0%",
        x2: Math.floor(Math.random()*100)+ "%",
        y2: "100%"
        
    };
    $.extend(attr, attr0);
    var contents = "";
    for (var i = 0; i < stops.length; i++) {
        var color = stops[i];
        if (stops[i].color)
            color = stops[i].color;

        var offset = isNaN(stops[i].pct) ? i / (stops.length - 1) : stops[i].pct
        offset = Math.round(100 * offset);

        contents += toTag("stop", {
            offset: offset + "%",
            style: "stop-color:" + color.toSVGRGB() + ";" + "stop-opacity:" + color.a

        });

    }

    return toTag("linearGradient", attr, contents);
}

function svgPath(path, style) {

    var attr = {
        d: path,

    };
    $.extend(attr, style);

    return toTag("path", attr);
}

function svgPolygon(points, style) {
    var attr = {
        points: points.map(function(pt) {
            return pt.x.toFixed(2) + "," + pt.y.toFixed(2)
        }).join(" ")
    };
    console.log(attr);

    $.extend(attr, style);

    return toTag("polygon", attr);
}

function svgRect(pos, dim, cornerRadius, style) {
    var attr = {
        x: pos.x,
        y: pos.y,
        width: dim.x,
        height: dim.y,
    };

    $.extend(attr, style);
    if (cornerRadius) {
        /*
        if (cornerRadius.x) {
            attr.rx = cornerRadius.x;
            attr.ry = cornerRadius.y;
        } else {
            attr.rx = cornerRadius;
            attr.ry = cornerRadius;
        }
        */
    }

    return toTag("rect", attr);
}


function svgEllipse(pos, dim, style, transform) {
    var attr = {
        cx: pos.x,
        cy: pos.y,
        rx: dim.x,
        ry: dim.y,
        transform: transform
    };


    $.extend(attr, style);

    return toTag("ellipse", attr);
}