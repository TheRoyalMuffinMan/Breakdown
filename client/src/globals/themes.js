// importing the required chakra libraries
import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

// declare a variable for fonts and set our fonts.
const fonts = {
    ...chakraTheme.fonts,
    heading: 'Kumbh Sans',
    subHeading: 'Kumbh Sans',
    body: 'Kumbh Sans',
}

// declare a variable for our theme and pass our overrides 
// in the 'extendTheme` method from chakra
const customTheme = extendTheme(fonts)
const darkerGrey = "#131313";
const normalGrey = "#191919";

export { darkerGrey, normalGrey, customTheme };

