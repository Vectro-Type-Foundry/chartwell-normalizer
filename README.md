# Chartwell Normalizer

Use the tool on the website [chartwell-normalizer.vectrotype.com](https://chartwell-normalizer.vectrotype.com).

### What is this?
[Chartwell](https://www.vectrotype.com/chartwell) only supports values from 0-100. This can be a problem if your data has values that do not fit within this range. To get around this, you can normalize your data. Essentially this scales the data to fit within the acceptable range and preserves the relationships between each value.

For example, if you have values of “50+100+200”, you would need to support at least a range of 0-200. If we divide all our values by 2, we’ll end up with values of “25+50+100”. All values now lie within the supported range of 0-100, and still retain the proportional relationship to each other.

The above calculator does all the math for you, so you don’t have to figure out the optimum value to divide by. Just set the minimum and maximum possible values, then enter your data string, with values separated by a “+”. The “normalized data” can then be used for Chartwell.

### About Chartwell
Chartwell is a set of fonts that make it easy to create charts. It uses OpenType features are used to interpret and visualize the data. The data remains as editable text, allowing for painless updates.

Chartwell is available for licensing exclusively at [Vectro Type Foundry](https://www.vectrotype.com/chartwell).