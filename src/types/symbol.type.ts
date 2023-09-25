export interface BaseSymbol {
    opacity :number
    shadowBlur :number
    shadowColor : string
    shadowOffsetX :  number
    shadowOffsetY : number
}

export interface MarkerSymbol extends BaseSymbol {
    markerOpacity : number 
    markerWidth  : number 
    markerHeight : number 
    markerDx : number 
    markerDy : number 
    markerHorizontalAlignment
    markerVerticalAlignment
    markerPlacement
    markerRotation
    markerFile
    markerType
    markerFill
    markerFillPatternFile
    markerFillOpacity
    markerLineColor
    markerLineWidth
    markerLineOpacity
    markerLineDasharray
    markerLinePatternFile
    markerPath
    markerPathWidth
    markerPathHeight
}

export interface TextSymbol extends BaseSymbol {
    textPlacement
    textFaceName
    textFont
    textWeight
    textStyle
    textSize
    textFill
    textOpacity
    textHaloFill
    textHaloRadius
    textHaloOpacity
    textWrapWidth
    textWrapCharacter
    textLineSpacing
    textHorizontalAlignment
    textVerticalAlignment
    textAlign
    textRotation
    textDx
    textDy
}

export interface PolygonsSymbol extends BaseSymbol {
    polygonFill
    polygonOpacity
    polygonPatternFile
}

export interface Lines extends BaseSymbol {
    lineColor
    lineWidth
    lineDasharray
    lineOpacity
    lineJoin
    lineCap
    linePatternFile
    lineDx
    lineDy
}
