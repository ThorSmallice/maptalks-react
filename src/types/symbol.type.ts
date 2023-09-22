export interface BaseSymbol {
    opacity
    shadowBlur
    shadowColor
    shadowOffsetX
    shadowOffsetY
}

export interface MarkerSymbol extends BaseSymbol {
    markerOpacity
    markerWidth
    markerHeight
    markerDx
    markerDy
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
