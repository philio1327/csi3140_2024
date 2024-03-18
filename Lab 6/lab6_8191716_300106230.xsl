<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>
  
  <xsl:template match="/Cookies">
    <html>
      <head>
        <style>
          .label {
            border: 3px solid black;
            padding: 10px;
            width: 300px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
          }
          .title {
            font-weight: bold;
            text-align: center;
            font-size: 30px;
            margin-bottom: 10px;
          }
          .bold {
            font-weight: bold;
          }
          .row {
            margin-bottom: 5px;
          }
          .row::after {
            content: "";
            display: table;
            clear: both;
          }
          .left {
            float: left;
          }
          .right {
            float: right;
          }
        </style>
      </head>
      <body>
        <div class="label">
          <div class="title"><xsl:value-of select="title"/></div>
          <hr></hr>
          <div class="row">
            <div class="left bold"><xsl:value-of select="serving/value"/></div>
          </div>
          <div class="row">
            <div class="left bold">Amount per Serving</div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="left bold">Calories</div>
            <div class="right"><xsl:value-of select="calories/quantityCal"/></div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="left bold"><xsl:value-of select="fat/value1"/></div>
            <div class="right">
              <xsl:value-of select="fat/percent"/>
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="left"><xsl:value-of select="saturated-fat/value2"/></div>
            <div class="right"><xsl:value-of select="saturated-fat/percent"/></div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="left bold"><xsl:value-of select="cholesterol/value3"/></div>
            <div class="right">
              <xsl:value-of select="cholesterol/percent"/>
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="left bold"><xsl:value-of select="sodium/value4"/></div>
            <div class="right">
              <xsl:value-of select="sodium/perceny"/>
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="left bold"><xsl:value-of select="carbohydrates/value5"/></div>
            <div class="right">
              <xsl:value-of select="carbohydrates/percent"/>
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="left bold"><xsl:value-of select="fiber/value6"/></div>
            <div class="right">
              <xsl:value-of select="fiber/percent"/>
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="left bold"><xsl:value-of select="sugar/value7"/></div>
            <div class="right">
              <xsl:value-of select="sugar/percent"/>
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="left bold"><xsl:value-of select="proteins/value8"/></div>
            <div class="right">
              <xsl:value-of select="proteins/percent"/>
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="left">
              <xsl:value-of select="note"/>
            </div>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>