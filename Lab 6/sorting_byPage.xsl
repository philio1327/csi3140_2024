<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <!-- Write XML declaration and DOCTYPE DTD information -->
  <xsl:output method="html" doctype-system="about:legacy-compat" />

  <!-- Match document root -->
  <xsl:template match="/">
    <html>
      <xsl:apply-templates/>
    </html>
  </xsl:template>

  <!-- Match book -->
  <xsl:template match="book">
    <head>
      <meta charset="utf-8"/>
      <title>ISBN <xsl:value-of select="@isbn"/> - <xsl:value-of select="title"/></title>
    </head>
    <body>
      <h1><xsl:value-of select="title"/></h1>
      <h2>by <xsl:value-of select="author/lastName"/>, <xsl:value-of select="author/firstName"/></h2>
      <table>
        <!-- Sort by page instead of chapter -->
        <xsl:for-each select="chapters/frontMatter/* | chapters/chapter | chapters/appendix">
        <xsl:sort select="@pages" data-type="number" order="ascending"/>
          <tr>
            <td><xsl:value-of select="name()"/><xsl:value-of select="@number"/></td>
            <td>( <xsl:value-of select="@pages"/> pages )</td>
          </tr>
        </xsl:for-each>
      </table>
      <p>Pages:
        <xsl:variable name="pagecount" select="sum(chapters//*/@pages)"/>
        <xsl:value-of select="$pagecount"/>
      </p>
      <p>Media Type: <xsl:value-of select="media/@type"/></p>
    </body>
  </xsl:template>

</xsl:stylesheet>