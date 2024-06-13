## Making charts with Datawrapper

This guide will get you started creating charts in Datawrapper.

### Getting setup

- Email [all.graphics@thomsonreuters.com](mailto:all.graphics@thomsonreuters.com) and ask the Graphics team for a new Datawrapper account. 
  - Follow up with Anand Katakam in APAC, Jon McClure in EMEA or Julia Wolfe in AMERS if you don’t receive a quick response.
- You will receive an email confirming your new account from Datawrapper.
- Go to [https://app.datawrapper.de/signin](https://app.datawrapper.de/signin) and login using your newly created Datawrapper account. 
- Add yourself to the [Datawrapper charts](https://teams.microsoft.com/l/channel/19%3a489aacae4e19400d8cf0da402c021076%40thread.skype/%25F0%259F%2593%2588Datawrapper%2520charts?groupId=c0949280-94a2-469a-a719-12397824db0a&tenantId=62ccb864-6a1a-4b5d-8e1c-397dec1a8258) channel in Teams.

### Making your first chart

These next sections will walk you through the basics of creating a chart in Datawrapper.

#### Preparing your data and uploading to Datawrapper

All charts start with clean data, and most of that data should come from a spreadsheet. But just because your data is in a spreadsheet does not mean it's ready to chart with.

Almost all data should be "square" with a single header row describing your data and individual datapoints listed down the columns, just like this:

![](https://user-images.githubusercontent.com/2772078/119649800-f859e480-be1a-11eb-81b8-d259f526c34a.png)

If your data is not square, you may need to reformat it by hand or use a [pivot table](https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576) in Excel. You can also try tools like Stanford's [DataWrangler](http://vis.stanford.edu/wrangler/) for more complex data transformations.

Once your data is ready, you can sign in to Datawrapper and start a new chart.

In most cases, you'll simple copy and paste your data from your spreadsheet into the text box on the "Upload Data" tab of your chart like this:

![](https://user-images.githubusercontent.com/2772078/119650999-63f08180-be1c-11eb-9464-b3d944db4e95.png)

You can also upload your entire spreadsheet directly, connect to a Google sheet or link up with a live JSON or CSV API.

![](https://user-images.githubusercontent.com/2772078/119651180-a44fff80-be1c-11eb-8ed6-ecc63048c463.png)

With your data prepped and uploaded, click "Proceed" to take you to the "Check and Describe" tab.

In this step, you can make sure Datawrapper is correctly parsing and interpretting your data. Common problems are things like years being treated as numbers instead of dates or numbers being parsed incorrectly as text. You can also divide or round columns of numbers in this step to make your chart more readable.

To change the format, click a column header ("A", "B", "C", etc. below) and choose the right options for your data in the panel left of the table.

![](https://user-images.githubusercontent.com/2772078/119651597-17f20c80-be1d-11eb-927d-81bf579c7577.png)

Once your data is correctly formatted, uploaded and parsed, you're ready to start charting.

#### Choosing the right chart type

With your data squared away, Datawrapper will make an educated guess at what chart type is best for your data, but you can choose to override that choice, too.

![](https://user-images.githubusercontent.com/2772078/119654242-23930280-be20-11eb-9e85-be3adefb8cca.png)

Choosing the right chart type is an important step to make sure you're communicating your data clearly and correctly.

Our friends in the graphics department at the FT have provided a very useful guide to what kinds of chart best match to different kinds of data. We highly recommend it and you can [download it here](https://github.com/ft-interactive/chart-doctor/raw/main/visual-vocabulary/FT4schools_RGS.pdf).

#### Refining your chart

On the "Refine" and "Annotate" tabs, you can further design your chart to meet your needs. This includes adding text annotations, sorting the data points, picking
a number format to display your values on your axes and more. It also enables you to pick colours for your chart elements from our official Reuters colour palette, but please do not use other colours than what are available in the default colour picker. That's our style!

![](https://user-images.githubusercontent.com/2772078/119655136-23dfcd80-be21-11eb-86f1-1ae6ea2cab78.png)

Refining your chart is an easy place to make a mistake that can distort your data or forget to label important elements necessary to communicate your data clearly. Check out the [Dos and Don'ts](../dos-and-donts.md) for tips on how to avoid common missteps here.

#### Filling out the metadata for you chart

In order to publish your chart, you **must** fill out a few fields on the "Annotate" tab.

Your chart must have a title, description and a data source that describes where your data came from as well as a link to the raw data whenever possible.

You must also include a **Root slug** (a Wild slug is optional). That slug should not include a `/` so `HEALTH-CORONAVIRUS` not `HEALTH-CORONAVIRUS/`.

Without this basic information your chart **will not successfully publish.**

![](https://user-images.githubusercontent.com/2772078/119656505-ad43cf80-be22-11eb-8615-75cfeab780a3.png)

#### Publishing your chart

With your chart ready, you can go to the "Publish & Embed" tab to start the process of publishing your chart. Click the "Publish chart" button when ready.

![](https://user-images.githubusercontent.com/2772078/119657200-84700a00-be23-11eb-948d-13880740b48f.png)

**CRITICALLY**, though, we **do not** use any of the export or embed options directly in Datawrapper to embed charts in the CMS.

Behind the scenes, graphics' bots will intercept and repackage your chart from Datawrapper, upload it to Reuters-owned servers and give you back the right links to use your charts in stories in the [**Datawrapper charts channel in Teams**](https://teams.microsoft.com/l/channel/19%3a489aacae4e19400d8cf0da402c021076%40thread.skype/%25F0%259F%2593%2588Datawrapper%2520charts?groupId=c0949280-94a2-469a-a719-12397824db0a&tenantId=62ccb864-6a1a-4b5d-8e1c-397dec1a8258).

In that channel, a card for your chart will be generated with several links including to a static image of your chart, an interactive version and a link to the chart hosted in the [Graphics Portal](https://sphinx.thomsonreuters.com/graphics/#/group/rngs).

![](https://user-images.githubusercontent.com/2772078/119657862-59d28100-be24-11eb-8bde-6b91058ebcc0.png)

#### Using your chart

For now, the only charts our CMS will accept are static images, **not** the interactive version. So choose the "Image" link from the card in Teams or use the Graphics Portal to get the same.

See [this short instructional guide](http://graphics.thomsonreuters.com/data/Embedding_graphics_in_Lynx.pdf) for a demonstration of how to then embed your chart in Lynx or ask the desk for help getting your chart in your story.

Remember to get your chart in front of your editor _before_ you add it to your story.

### Next steps

Read the [Dataviz 101](https://docs.google.com/presentation/d/1X6i6sS1bgLluGeyxVcibbJMuCSSD7xDgVrHz1bFOeJo/present) presentation to learn how to avoid common charting mistakes and discover best practices to emmulate in your dataviz.
