import React from "react";

export const CertifiedImage1 = () => {
  return (
    <img
      loading='lazy'
      sizes='36px'
      className=' ls-is-cached lazyloaded'
      srcSet='https://bellroy.imgix.net/cms_images/2782/b-corporation_w.png?auto=format&amp;fit=max&amp;w=36 36w,
              https://bellroy.imgix.net/cms_images/2782/b-corporation_w.png?auto=format&amp;fit=max&amp;w=72 72w'
      src='https://bellroy.imgix.net/cms_images/2782/b-corporation_w.png?auto=format&amp;fit=max'
      alt='certifiedImage1'
    ></img>
  );
};

export const CertifiedImage2 = () => {
  return (
    <img
      loading='lazy'
      sizes='36px'
      className=' ls-is-cached lazyloaded'
      srcSet='https://bellroy.imgix.net/cms_images/6324/GPTW-Logo-2.jpeg?auto=format&amp;fit=max&amp;w=36 36w,
              https://bellroy.imgix.net/cms_images/6324/GPTW-Logo-2.jpeg?auto=format&amp;fit=max&amp;w=72 72w'
      src='https://bellroy.imgix.net/cms_images/6324/GPTW-Logo-2.jpeg?auto=format&amp;fit=max'
      alt='certifiedImage2'
    ></img>
  );
};

export const Images = () => {
  return <div>Images</div>;
};
