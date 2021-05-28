## Datawrapper Dos and Don'ts

This guide will help you make clear charts that tell compelling stories.

#### ✘DON'T: Put units in the dek or notes.
#### ✓DO: Include units in your axis values

This is easiest to do in the "Check & Describe" tab:
![](https://raw.githubusercontent.com/reuters-graphics/newsroom-datawrapper-guide/gh-pages/.github/images/units.png?v=3)

This will add the dollar sign to the y-axis label:
![](https://raw.githubusercontent.com/reuters-graphics/newsroom-datawrapper-guide/gh-pages/.github/images/units-chart.png?v=3)

#### ✘DON'T: Mix and match number hierarchy
#### ✓DO: Use decimals and units to label values consistently

Financial and economic data is often expressed in millions or billions of dollars. If you don't convert those numbers, the reader has to do math. For example, converting 1,000 billion to 1 trillion.

![](https://raw.githubusercontent.com/reuters-graphics/newsroom-datawrapper-guide/gh-pages/.github/images/hierarchy.png?v=3)

There are two ways to handle this:

1) If your data is in Excel, you can do that conversion yourself before pasting your data into Datawrapper.

2) You can also do this in Datawrapper under the "Check & Describe" tab:
* Divide or multiply to get clean decimal style numbers.
* Append the "K" (thousands) "M" (millions), "B" (billions), etc.

#### ✘DON'T: Make spaghetti
#### ✓DO: Decide what's important and omit or combine non-essential variables.

Spaghetti charts are hard to parse. If you can eliminate variables from your dataset, or combine several categories into "Other", you're chart will be much easier to read.

#### ✘DON'T: Make pie charts.
#### ✓DO: Make bar charts!

Human brains are bad at comparing slice sizes to one another. The difference between 30% and 40%, for example, is not very dramatic when represented as a pie chart.

Bars, however, are very easy to compare!

Pie charts are almost always better as bar charts. Make bar charts.

![](https://raw.githubusercontent.com/reuters-graphics/newsroom-datawrapper-guide/gh-pages/.github/images/pie-charts.png?v=3)

#### Should your bar chart be rotated?

If you are comparing a lot of categories, Datawrapper might rotate your labels. Rotated labels are hard to read. The easy fix is to simply rotate to horizontal bars.

#### Remove to improve

Too many colors, labels, axes labels, etc... can make your chart harder to read. You don't want to overload the reader. When in doubt, fall back on the mantra, "Remove to Improve."



