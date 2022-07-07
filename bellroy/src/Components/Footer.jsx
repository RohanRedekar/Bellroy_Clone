import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import "./Footer.css";
const Content = {
  HELP: [
    "Customer Care",
    "Shipping and Returns",
    "3-Year Warranty",
    "Contact Us",
    "Terms & Conditions",
    "Privacy Policy",
    "Cookie Policy",
  ],
  "SHOP PRODUCTS": [
    "Wallets",
    "Passport Holders",
    "RFID Protected",
    "Bags",
    "Phone & Laptop Cases",
    "Work Accessories",
    "Travel",
    "Pouches",
    "Key Holders",
  ],
  "SHOP COLLECTIONS": [
    "New Releases",
    "Bestsellers",
    "Coming soon",
    "Premium",
    "Small Bags",
    "Recycled",
    "Slim Your Wallet",
    "Apex",
    "Materials Hub",
    "Value Sets",
    "The Outlet",
    "Rediscover Travel",
    "Lite Collection",
  ],
  ABOUT: [
    "Our Story",
    "Our Materials",
    "Responsible Business",
    "Journal",
    "Collaborations",
    "Find In-Store",
    "Affiliate Program",
    "Corporate Gifting",
    "Press",
    "Careers",
  ],
};

export const Footer = () => {
  return (
    <Box>
      <Box className='blackContainer'>
        <Grid className='footerGrid' gridGap='15px'>
          {Object.keys(Content).map((el) => {
            return (
              <GridItem>
                <Text>{el}</Text>
                {Content[el].map((e) => (
                  <Text className='footerLinks'>{e}</Text>
                ))}
              </GridItem>
            );
          })}
          <GridItem>
            <Grid
              className='logoGrid'
              gridAutoFlow={"column"}
              gridGap={"20px"}
              justifyContent='center'
            >
              <Box>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 44 44'
                  height='20px'
                  fill='rgb(153,153,153)'
                >
                  <title>Instagram</title>
                  <path
                    class='st0'
                    d='M21.3,14.4c-3.8,0-6.9,3.1-6.9,6.9c0,3.8,3.1,6.9,6.9,6.9c3.8,0,6.9-3.1,6.9-6.9c0,0,0,0,0,0 C28.3,17.5,25.2,14.4,21.3,14.4C21.3,14.4,21.3,14.4,21.3,14.4z'
                  ></path>
                  <path
                    class='st0'
                    d='M43.9,12.9c0-1.8-0.4-3.6-1-5.3c-0.6-1.5-1.4-2.8-2.5-3.9c-1.1-1.1-2.4-2-3.9-2.5c-1.7-0.6-3.5-1-5.3-1
					C28.7,0,28,0,22,0s-6.7,0-9.1,0.1c-1.8,0-3.6,0.4-5.3,1C6.1,1.7,4.8,2.6,3.7,3.7c-1.1,1.1-2,2.4-2.5,3.9c-0.6,1.7-1,3.5-1,5.3
					C0,15.3,0,16,0,22s0,6.7,0.1,9.1c0,1.8,0.4,3.6,1,5.3c0.6,1.5,1.4,2.8,2.5,3.9c1.1,1.1,2.4,2,3.9,2.5c1.7,0.6,3.5,1,5.3,1
				    C15.3,44,16,44,22,44s6.7,0,9.1-0.1c1.8,0,3.6-0.4,5.3-1c1.5-0.6,2.8-1.4,3.9-2.5c1.1-1.1,2-2.4,2.5-3.9c0.6-1.7,1-3.5,1-5.3
					C44,28.7,44,28,44,22S44,15.3,43.9,12.9z M21.3,32c-5.9,0-10.7-4.8-10.7-10.7s4.8-10.7,10.7-10.7S32,15.4,32,21.3S27.2,32,21.3,32
					L21.3,32z M35.3,13.3c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3c1.8,0,3.3,1.5,3.3,3.3C38.7,11.8,37.2,13.3,35.3,13.3
					C35.3,13.3,35.3,13.3,35.3,13.3z'
                  ></path>
                </svg>
              </Box>
              <Box>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 44 44'
                  height='20px'
                  style={{ marginRight: "-10px" }}
                  fill='rgb(153,153,153)'
                >
                  <title>Facebook</title>
                  <path
                    class='st0'
                    d='M14.3,44V23.9h6.5l1-7.8h-7.5v-5c0-2.3,0.6-3.8,3.7-3.8h4v-7C20.1,0.1,18.1,0,16.2,0c-5.8,0-9.7,3.7-9.7,10.3 v5.8H0v7.8h6.5V44H14.3z'
                  ></path>
                </svg>
              </Box>
              <Box>
                <svg
                  id='Layer_1'
                  data-name='Layer 1'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 176 124'
                  height='19px'
                  fill='rgb(153,153,153)'
                >
                  <title>YouTube</title>
                  <path
                    d='M180.32,53.36A22.12,22.12,0,0,0,164.76,37.7C151,34,96,34,96,34s-55,0-68.76,3.7A22.12,22.12,0,0,0,11.68,53.36C8,67.18,8,96,8,96s0,28.82,3.68,42.64A22.12,22.12,0,0,0,27.24,154.3C41,158,96,158,96,158s55,0,68.76-3.7a22.12,22.12,0,0,0,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36ZM78,122.17V69.83L124,96Z'
                    transform='translate(-8 -34)'
                  ></path>
                </svg>
              </Box>
              <Box>
                <svg
                  id='Layer_1'
                  data-name='Layer 1'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 658.14 662'
                  height='20px'
                  fill='rgb(153,153,153)'
                >
                  <title>LinkedIn</title>
                  <path d='M0,47.42C0,21.25,21.73,0,48.57,0H609.16C636,0,657.78,21.25,657.78,47.42V614.59c0,26.18-21.76,47.41-48.62,47.41H48.57C21.73,662,0,640.77,0,614.6V47.41Z'></path>
                  <path
                    fill='#333'
                    d='M199.36,554.16V255.23H100V554.16h99.35ZM149.7,214.42c34.64,0,56.21-22.95,56.21-51.64-.65-29.33-21.57-51.65-55.55-51.65s-56.21,22.32-56.21,51.65c0,28.69,21.55,51.64,54.9,51.64h.65ZM254.36,554.16h99.35V387.24c0-8.92.65-17.86,3.27-24.24,7.18-17.86,23.53-36.34,51-36.34,36,0,50.33,27.41,50.33,67.6v159.9h99.35V382.76c0-91.81-49-134.54-114.38-134.54-53.59,0-77.13,30-90.2,50.36h.66V255.24H254.37c1.29,28,0,298.93,0,298.93Z'
                  ></path>
                </svg>
              </Box>
              <Box>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 48 48'
                  height='20px'
                  fill='rgb(153,153,153)'
                >
                  <title>Pinterest</title>
                  <path
                    d='M23,0C10.3,0,0,10.2,0,23c0,9.5,5.8,18,14.6,21.5c-0.3-2.2-0.3-4.4,0.1-6.6c0.4-1.8,2.7-11.4,2.7-11.4
					c-0.5-1.1-0.7-2.2-0.7-3.4c0-3.2,1.9-5.6,4.2-5.6c2,0,2.9,1.5,2.9,3.2c0,2-1.3,4.9-1.9,7.7c-0.4,1.8,0.6,3.6,2.4,4.1
					c0.3,0.1,0.7,0.1,1,0.1c4.1,0,7.2-4.3,7.2-10.5c0-5.5-4-9.4-9.6-9.4c-5.5-0.2-10.2,4.1-10.4,9.6c0,0.1,0,0.3,0,0.4
					c0,1.9,0.6,3.7,1.7,5.2c0.2,0.2,0.2,0.4,0.1,0.7c-0.2,0.7-0.6,2.3-0.6,2.6s-0.3,0.5-0.8,0.3c-2.9-1.4-4.7-5.6-4.7-9
					c0-7.3,5.3-13.9,15.2-13.9c8,0,14.2,5.7,14.2,13.3c0,7.9-5,14.3-11.9,14.3c-2.3,0-4.5-1.2-5.3-2.6L19,39c-0.7,2.1-1.7,4.1-2.9,6
				    c12.2,3.7,25-3.1,28.7-15.3c3.7-12.2-3.1-25-15.3-28.7C27.4,0.4,25.2,0,23,0z'
                  ></path>
                </svg>
              </Box>
              <Box>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  height='20px'
                  fill='rgb(153,153,153)'
                >
                  <title>Twitter</title>
                  <path d='M16 3.038a6.62 6.62 0 0 1-1.885.517 3.299 3.299 0 0 0 1.443-1.816 6.59 6.59 0 0 1-2.085.795 3.273 3.273 0 0 0-2.396-1.036 3.281 3.281 0 0 0-3.197 4.03A9.329 9.329 0 0 1 1.114 2.1 3.243 3.243 0 0 0 .67 3.75c0 1.14.58 2.143 1.46 2.732a3.278 3.278 0 0 1-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22a3.336 3.336 0 0 1-1.482.056 3.287 3.287 0 0 0 3.067 2.28 6.592 6.592 0 0 1-4.077 1.404c-.265 0-.526-.015-.783-.045a9.303 9.303 0 0 0 5.032 1.474c6.038 0 9.34-5 9.34-9.338l-.01-.425a6.67 6.67 0 0 0 1.638-1.7z'></path>
                </svg>
              </Box>
              <Box>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 128 128'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  height='22px'
                  fill='rgb(153,153,153)'
                >
                  <g>
                    <path
                      d='M3.1,53.9c0-2.1,0-4.3,0-6.4c0.1-0.3,0.2-0.5,0.2-0.8c0.8-3.1,1.2-6.3,2.3-9.3c3.8-9.8,10.7-17,19.7-22.1
					C37,8.8,49.5,6.9,62.7,8.9c7.7,1.2,15,3.9,21.5,8.3c9.5,6.4,16.1,14.9,18.5,26.4c0.6,3,0.9,6,0.5,9.1c-0.5-0.1-0.9-0.2-1.2-0.4
					c-7-2.3-14.2-3-21.5-2.1C69,51.8,59.3,56.7,52,65.7c-5.1,6.2-7.7,13.4-7.4,21.5c0.1,1.8,0.3,3.6,0.5,5.4c-0.3,0-0.6,0-0.9-0.1
					c-4.9-0.8-9.6-2.1-14.2-4.1c-0.5-0.2-1.2-0.2-1.7,0.1c-4.9,2.1-9.8,4.2-14.7,6.3c-1.3,0.6-2.7,1.1-4.2,1.8c0.1-1.2,0.2-2.1,0.3-3.1
					c0.6-5.9,1.2-11.7,1.8-17.6c0.1-0.9-0.1-1.6-0.6-2.4C7.5,69,5.1,64,3.9,58.4C3.6,56.9,3.3,55.4,3.1,53.9z M29.2,31.9
					c-0.2,3.8,3,7.1,7,7.3c3.8,0.2,7.1-3,7.3-7c0.2-3.8-3-7.1-7-7.3C32.7,24.8,29.4,28,29.2,31.9z M77.2,32c0-3.9-3.2-7.1-7.1-7.1
					c-3.9,0-7.1,3.3-7.1,7.1c0,3.9,3.2,7.1,7.1,7.1C74,39.2,77.2,36,77.2,32z'
                    ></path>
                    <path
                      d='M119.8,121c-2.2-0.9-4.2-1.8-6.1-2.6c-2.6-1.1-5.3-2.3-7.9-3.4c-0.5-0.2-1.3-0.2-1.8,0c-11.7,4.8-23.5,4.8-35.1-0.3
					c-8.3-3.6-14.6-9.4-18.1-17.9c-3.3-8-2.8-15.9,1.2-23.6c4.5-8.5,11.7-13.8,20.7-16.9c5.7-2,11.6-2.6,17.5-2.1
					c11,1,20.6,5.2,27.7,13.9c8.2,10.1,9.1,23.6,1.3,34.5c-1.5,2.1-0.9,3.9-0.7,5.9C118.9,112.6,119.4,116.7,119.8,121z M73.9,77.5
					c2.9,0,5.4-2.4,5.4-5.3c0-2.9-2.4-5.4-5.3-5.4c-2.9-0.1-5.4,2.4-5.4,5.4C68.6,75.2,70.9,77.5,73.9,77.5z M99.5,77.5
					c3,0,5.3-2.4,5.3-5.3c0-2.9-2.4-5.4-5.4-5.4c-2.9,0-5.4,2.5-5.4,5.5C94.2,75.2,96.5,77.5,99.5,77.5z'
                    ></path>
                  </g>
                </svg>
              </Box>
              <Box>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 86 26'
                  height='20px'
                  fill='rgb(153,153,153)'
                >
                  <title>Carryology</title>
                  <path d='M11.662 20.238c-.292 2.261-1.574 3.895-3.69 4.875-1.971.913-3.648.162-5.12-1.214-1.25-1.169-1.83-2.706-1.989-4.33-.359-3.669.402-7.121 2.386-10.266.998-1.583 2.396-2.694 4.198-3.147 1.571-.394 3.127-.224 4.1 1.29.986 1.534 1.123 3.224.288 4.871-.49.966-1.402 1.258-2.4.811-1.221-.547-.524-1.218-.173-2.028.466-1.077.86-2.587-.256-3.292-1.401-.885-2.402.451-3.076 1.5-2.285 3.556-2.73 7.531-1.935 11.564.577 2.927 2.941 3.438 5.125 1.299.707-.693 1.286-1.516 1.923-2.28l.619.347zM83.944 3.352c-.836.114-1.424.398-1.124 1.512.458 1.701-.454 3.133-1.177 4.569-.264.525-.633 1.261-1.263 1.064-.758-.237-.689-1.089-.587-1.772.139-.925.401-1.836.481-2.764.069-.807.269-1.848-1.005-1.942-1.381-.102-1.284.765-1.235 1.821.089 1.93-.467 3.641-2.682 4.721.148-1.774.195-3.303.425-4.804.182-1.19-.222-1.391-1.236-1.051-.371.125-.569.839-1.022.491-2.156-1.658-3.384.071-4.834 1.205-.984.77-1.821 1.473-3.116-.03-1.443-1.675-3.531-1.066-4.515 1.025-.392.834-.773 1.772-.781 2.667-.018 1.83-.974 2.73-2.784 3.452.138-1.502.213-2.765.379-4.017l1.014-7.08c.112-.847.202-1.923-1.004-1.933-1.135-.009-1.739.549-1.529 1.992.203 1.397-.081 2.884-.274 4.315-.27 1.998-1.879 2.626-3.492 1.429-1.858-1.379-3.87-.924-4.863 1.145-.766 1.596-.942 3.268-.335 4.962.78 2.176 2.986 2.712 4.69 1.127.906-.843 1.403-1.927 1.489-3.164.083-1.197.699-1.851 1.971-2.061 0 .548-.018 1.05.004 1.549.053 1.209-.914 2.742.502 3.531 1.457.812 2.471-.596 3.527-1.373.537-.395.8-.835 1.677-.263 2.314 1.512 3.972.852 5.163-1.744.365-.795.307-1.949 1.775-2.064.156 1.021.266 2.092 1.006 2.962.884 1.041 2.036.616 3.345.545l-1.039 1.196c-2.392 2.791-2.759 4.667-1.279 6.813.586.849 1.264 1.702 2.448 1.577 1.267-.134 1.54-1.237 1.801-2.211.555-2.074.506-4.219.646-6.345.163-2.471 1.771-3.351 3.847-2.172.953.541 1.801.266 2.668-.158 1.31.143.807.969.629 1.672-.161 1.61-.315 3.221-.484 4.83-.099.939.37 1.518 1.233 1.619.698.082 1.127-.511 1.13-1.134.028-4.861.358-9.694 1.074-14.504.111-.75-.395-1.323-1.264-1.205zM50.69 9.053c.322.014.63.153.671.693-.042.435-.512.44-.879.442-.276.002-.798-.222-.789-.301.057-.553.439-.859.997-.834zm.852 3.659c-.113.956-.416 1.965-1.558 1.93-.916-.028-1.006-.967-1.08-1.736-.127-1.314.818-.937 1.304-.908.861-.206 1.442-.195 1.334.714zm12.183-5.527c.5-.099.882.28.862.685-.02.43-.502.618-.947.669-.333.034-.747.067-.801-.34-.081-.601.366-.912.886-1.014zm1.018 3.792c-.102.852-.438 1.606-1.397 1.849-1.009-.098-1.092-.838-1.174-1.615-.102-.97.455-1.126 1.22-1.053.58.057 1.491-.345 1.351.819zm7.45 9.98c-1.412-2.121-.767-3.608.627-5.428.286 2.022.128 3.55-.627 5.428zm-.825-9.397c-1.336-.013-.923-1.348-1.164-1.987.126-1.459.187-3.25 1.5-3.35 1.288-.098 1.684 1.72 1.707 2.887.023 1.176-.605 2.464-2.043 2.45zm-9.402 5.41c-5.053.776-10.1 1.593-15.134 2.487-1.267.225-1.635-.011-1.593-1.339.083-2.652.407-5.269.786-7.886.133-.917.093-1.839-1.129-1.805-.958.026-1.503.431-1.166 1.664.432 1.581-.439 2.991-1.14 4.349-.285.552-.584 1.425-1.458 1.088-.676-.261-.465-1.041-.406-1.594.108-1.012.394-2.006.494-3.018.085-.863.076-1.83-1.191-1.8-1.137.027-1.188.643-1.123 1.71.152 2.505-.798 4.574-3.142 5.862-.755-1.024-.029-1.699.314-2.423.818-1.728.878-3.155-1.427-3.632-.366-.076-.635-.163-.74-.544-.266-.963-.653-1.966-1.884-1.449-1.158.485-1.32 1.555-1.188 2.787.237 2.201-1.477 5.206-3.343 6.12-.318-.853.248-1.469.554-2.146.767-1.697.935-3.173-1.395-3.681-.341-.074-.676-.072-.759-.492-.2-1.007-.596-1.982-1.819-1.494-1.154.46-1.364 1.537-1.253 2.781.214 2.398-1.14 4.183-2.532 6.45-.792-1.752-.393-2.993-.272-4.222.143-1.449-.703-2.472-1.818-3.019-1.101-.54-2.144.117-2.911 1.04-1.31 1.575-1.897 3.421-1.908 5.44-.014 2.632 1.31 3.358 3.596 2.064.551-.311.847-1.356 1.877-.507 1.576 1.299 2.729.277 3.517-1.075.768-1.317 1.365-2.741 1.943-4.156.334-.817.937-1.061 1.616-.812.878.321.276.972.12 1.487a7.998 7.998 0 0 1-.356.959c-.496 1.107-.606 2.221.451 3.014 1.145.859 2.259.395 3.259-.418 1.469-1.194 2.037-2.899 2.603-4.605.298-.897.576-2.055 1.822-1.546 1.304.533.147 1.429-.044 2.096-.337 1.177-.862 2.403.324 3.281 1.345.996 2.557.338 3.637-.694.363-.346.671-1.292 1.364-.552 1.277 1.365 2.67.855 4.035.205.405 2.255-.077 3.345-2.46 3.593-3.89.405-7.733 1.255-11.598 1.908-.789.133-1.749.348-1.602 1.267.196 1.224 1.208.507 1.867.395 3.78-.642 7.559-1.289 11.324-2.008 1.358-.259 2.421-.417 2.064 1.543-.159.87.175 1.615 1.133 1.631 1.108.018 1.111-.975 1.029-1.69-.221-1.925.799-2.434 2.472-2.714 6.267-1.046 12.514-2.213 19.016-3.379-1.467-1.34-3.009-.739-4.426-.521zm-43.858-1.7c-.107 1.577-.317 3.068-1.893 3.378-.884.174-.697-.979-.655-1.567.09-1.273.138-2.651 1.513-3.284.112-.05 1.465.596 1.035 1.473z'></path>
                </svg>
              </Box>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
      <Box className='blackContainer' borderTop={"1px solid rgb(153,153,153)"}>
        <Flex className='bottomFooter'>
          <Flex className='bottomFootersecondary'>
            <img
              loading='lazy'
              sizes='36px'
              class=' ls-is-cached lazyloaded'
              srcset='https://bellroy.imgix.net/cms_images/2782/b-corporation_w.png?auto=format&amp;fit=max&amp;w=36 36w,
              https://bellroy.imgix.net/cms_images/2782/b-corporation_w.png?auto=format&amp;fit=max&amp;w=72 72w'
              src='https://bellroy.imgix.net/cms_images/2782/b-corporation_w.png?auto=format&amp;fit=max'
              alt='certifiedImage1'
            ></img>
            <img
              loading='lazy'
              sizes='36px'
              class=' ls-is-cached lazyloaded'
              srcset='https://bellroy.imgix.net/cms_images/6324/GPTW-Logo-2.jpeg?auto=format&amp;fit=max&amp;w=36 36w,
              https://bellroy.imgix.net/cms_images/6324/GPTW-Logo-2.jpeg?auto=format&amp;fit=max&amp;w=72 72w'
              src='https://bellroy.imgix.net/cms_images/6324/GPTW-Logo-2.jpeg?auto=format&amp;fit=max'
              alt='certifiedImage2'
            ></img>
          </Flex>
          <Flex className='bottomFootersecondary textSpacing'>
            <Text fontSize={"12px"}>
              Got a question? Contact{" "}
              <span style={{ color: "rgb(216, 76, 31)" }}>
                support@bellroy.com
              </span>
            </Text>
            <Text>All rights reserved &copy; 2022 Bellroy Pty Ltd</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
