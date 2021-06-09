## Datawrapper Dos and Don'ts

This guide will help you make clear charts that tell compelling stories.

#### ✘DON'T: Put units in the dek or notes.
#### ✓DO: Include units in your axis values

This is easiest to do in the "Check & Describe" tab:
![](https://raw.githubusercontent.com/reuters-graphics/newsroom-datawrapper-guide/gh-pages/.github/images/units.png)

This will add the dollar sign to the y-axis label:
![](https://raw.githubusercontent.com/reuters-graphics/newsroom-datawrapper-guide/gh-pages/.github/images/units-chart.png)

#### ✘DON'T: Mix and match number hierarchy
#### ✓DO: Use decimals and units to label values consistently

Financial and economic data are often expressed in millions or billions of dollars. If you don't convert those numbers, the reader has to do math. For example, converting "1,000 billion" to "1 trillion".

![](https://raw.githubusercontent.com/reuters-graphics/newsroom-datawrapper-guide/gh-pages/.github/images/hierarchy.png)

There are two ways to handle this:

1) If your data is in Excel, you can do that conversion yourself before pasting your data into Datawrapper.

2) You can also do this in Datawrapper under the "Check & Describe" tab:
* Divide or multiply to get clean decimal style numbers.
* Append the "K" (thousands) "M" (millions), "B" (billions), etc.

#### ✘DON'T: Make charts with too many variables
#### ✓DO: Decide what's important and omit or combine non-essential variables.

Time series charts with a lot of variables can be difficult to parse. If you can eliminate categories or combine the smaller slices, your chart will be much easier to read.

#### ✘DON'T: Make pie charts.
#### ✓DO: Make bar charts!

Human brains are bad at comparing slice sizes to one another. The difference between 30% and 40%, for example, is not very dramatic when represented as a pie chart.

Bars, however, are very easy to compare!

Pie charts are almost always better as bar charts. Make bar charts.

![](https://raw.githubusercontent.com/reuters-graphics/newsroom-datawrapper-guide/gh-pages/.github/images/pie-charts.png)

#### Should your bar chart be rotated?

If you are comparing a lot of categories, Datawrapper might rotate your labels to make room on the x axis. Rotated labels are hard to read. The easy fix is to simply rotate to horizontal bars.

![](https://raw.githubusercontent.com/reuters-graphics/newsroom-datawrapper-guide/gh-pages/.github/images/horiz-bars.png)

#### ✘DON'T: Use wonky names or abbreviations
#### ✓DO: Feel free to rename variables when appropriate

Data terminology is often wonky. Part of our job as journalists is to simplify and explain. To that end, we want to use simple and common language when labeling charts so the reader understands what they're reading.

![](https://raw.githubusercontent.com/reuters-graphics/newsroom-datawrapper-guide/gh-pages/.github/images/language.png)


#### Remove to improve

Too many colors, labels, axes labels, etc... can make your chart harder to read. You don't want to overload the reader. When in doubt, fall back on the axiom, "Remove to Improve."



