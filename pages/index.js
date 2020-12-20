import Head from 'next/head'
import Link from 'next/link'
import {groq} from 'next-sanity'
import { getClient } from '../lib/sanity'
import ProgressiveImage from 'react-progressive-image'
import Image from 'next/image'
import { Flex, Box, Stack, Text } from 'bumbag'

export async function getStaticProps() {
    const query = groq`*[_type == 'siteSettings'][0]{
      title,
      'heroImageCap': heroImage.caption,
      'heroImageAlt': heroImage.alt,
      'heroImage': heroImage.asset->{
        url,
        metadata {
          lqip,
        }
      }
    }`
    const site = await getClient().fetch(query);
    return {
        props: {
            site: site
        }
    }
}
export default function IndexPage({site}) {
    return (
   
       <Box>
       
       <Box margin="1.5rem" alignX="center" >
       <Text font="heading" alignX="center">{site.title}</Text>
       </Box>
       <Box alignX="center">
         <ProgressiveImage src={site.heroImage.url} placeholder={site.heroImage.metadata.lqip}>
             {src => <Image src={src} height='450' width='600' alt={site.heroImageAlt} /> }
         </ProgressiveImage>
       
       </Box>
       <Box margin="1.5rem" alignX="center" >
       <Text alignX="center">Coming soon...</Text>
       </Box>
        </Box>
     
    )
}