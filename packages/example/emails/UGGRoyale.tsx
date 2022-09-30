import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlAttributes,
  MjmlImage,
  MjmlSection,
  MjmlClass,
  MjmlFont,
  MjmlStyle,
  MjmlText,
  MjmlColumn,
  MjmlBody,
  MjmlWrapper,
  MjmlRaw,
  MjmlCarousel,
  MjmlCarouselImage,
  MjmlButton,
  MjmlGroup,
} from "@postbote/mjml-react";

export const UGGRoyale = () => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>UGG Royale</MjmlTitle>
        <MjmlAttributes>
          <MjmlImage alt="" padding="0px" />
          <MjmlSection padding="0px" />
          <MjmlClass
            name="open-sans-button"
            font-family="Inter, Arial, sans-serif"
            background-color="#111111"
            color="#ffffff"
            height="30px"
            text-transform="uppercase"
            font-size="16px"
            text-decoration="none"
          ></MjmlClass>
          <MjmlClass
            name="footer-text"
            font-family="Inter, Arial, sans-serif"
            color="#111111"
            font-size="10px"
            line-height="14px"
          ></MjmlClass>
          <MjmlClass
            name="body-text"
            font-family="Inter, Arial, sans-serif"
            color="#111111"
            font-size="16px"
            line-height="26px"
            align="center"
          ></MjmlClass>
          <MjmlClass
            name="headline-text"
            font-family="Big Caslon, Garamond, Times, serif"
            color="#111111"
            font-size="40px"
            line-height="36px"
            align="center"
            text-transform="uppercase"
          ></MjmlClass>
        </MjmlAttributes>
        <MjmlFont
          name="Inter"
          href="http://fonts.googleapis.com/css?family=Inter"
        ></MjmlFont>
        <MjmlStyle inline="inline">{`.link-nostyle {color: inherit; text-decoration: none }; /* Apple specific Links */ .apple-link-black a {color:#111111 !important; text-decoration:none; } .apple-link-gray a {color:#999999 !important; text-decoration:none; } .apple-link-white a
          {color:#ffffff !important; text-decoration:none; } .apple-link-tan a {color: #aa6034 !important; text-decoration: none; } .apple-link-light-grey a {color: #c7c8ca; text-decoration: none; } .preheader {display:none !important; visibility:hidden;
      mso-hide:all; max-height:0px; max-width:0px; opacity:0; overflow:hidden; width:100%;} img[className="img-max"] {max - width: 100% !important; width: 100% !important; height: auto !important; }
        `}</MjmlStyle>
        <MjmlStyle>{`@media all and (max-width: 600px) {img[title *= "img30"] {width:30% !important; } }`}</MjmlStyle>
      </MjmlHead>
      <MjmlBody background-color="#ffffff">
        <MjmlSection padding="0px">
          <MjmlColumn>
            <MjmlText
              font-size="1px"
              align="left"
              color="#ffffff"
              line-height="1px"
              fontFamily="Inter"
              padding="0px"
            >
              <span className="preheader">
                No longer on backorder, the Royale is now here and waiting for
                you.
              </span>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection background-color="#f9f9f9">
          <MjmlColumn>
            <MjmlText
              fontSize="11px"
              lineHeight="24px"
              letterSpacing="1px"
              textTransform="uppercase"
              align="center"
              fontFamily="Inter"
            >
              Last Chance: Free two-day shipping on any order $100+ ends today
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlWrapper background-color="#f9f9f9" padding="0px">
          <MjmlSection>
            <MjmlColumn>
              <MjmlImage
                alt="Model in UGG in a baby blue royale"
                href="http://www.ugg.com/"
                width="600px"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/main.jpg"
              ></MjmlImage>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection padding="30px 0 20px">
            <MjmlColumn>
              <MjmlText
                fontFamily="serif"
                fontSize={40}
                align="center"
                textTransform="uppercase"
              >
                the
                <br /> wait
                <br /> is over
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection>
            <MjmlColumn width="480px">
              <MjmlText align="center" fontFamily="Inter" lineHeight={24}>
                Due to popular demand, our best-selling sandal is back. Get
                yours before they sell out again.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlRaw>{`&lt;!--[if !mso]&gt;&lt;\!--&gt;`}</MjmlRaw>
          <MjmlSection>
            <MjmlColumn width="550px">
              <MjmlCarousel
                tb-border-radius="0px"
                tb-hover-border-color="red"
                tb-width="50px"
                tb-border="0px"
                left-icon="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/arrow-left.png"
                right-icon="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/arrow-right.png"
                icon-width="16px"
              >
                <MjmlCarouselImage
                  href="http://www.ugg.com/"
                  thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BPNK.gif"
                  alt="Side view of the Royal in Baby Pink"
                  src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product1.jpg"
                ></MjmlCarouselImage>
                <MjmlCarouselImage
                  href="http://www.ugg.com/"
                  thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/NOPK.gif"
                  src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product2.jpg"
                ></MjmlCarouselImage>
                <MjmlCarouselImage
                  href="http://www.ugg.com/"
                  thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BBLU.gif"
                  src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product3.jpg"
                ></MjmlCarouselImage>
                <MjmlCarouselImage
                  href="http://www.ugg.com/"
                  alt="Side view of the Royal in Black"
                  thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BLK.gif"
                  src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product4.jpg"
                ></MjmlCarouselImage>
                <MjmlCarouselImage
                  href="http://www.ugg.com/"
                  alt="Side view of the Royal in Seal"
                  thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/SEL.gif"
                  src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product5.jpg"
                ></MjmlCarouselImage>
                <MjmlCarouselImage
                  href="http://www.ugg.com/"
                  alt="Side view of the Royal in White"
                  thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/WHT.gif"
                  src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product6.jpg"
                ></MjmlCarouselImage>
              </MjmlCarousel>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection>
            <MjmlColumn width="480px">
              <MjmlText
                font-family="Inter, Arial, sans-serif"
                font-size="14px"
                line-height="26px"
                color="#bcbec0"
                text-transform="uppercase"
                align="center"
              >
                select color
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlRaw>{`&lt;\!--&lt;![endif]--&gt;`}</MjmlRaw>
          <MjmlSection padding="10px 0 5px">
            <MjmlColumn>
              <MjmlButton
                padding="0px"
                font-family="Inter, Arial, sans-serif"
                href="http://www.ugg.com/"
                font-size="16px"
                width="270px"
                color="#111111"
                background-color="#f9f9f9"
              >
                <span
                  style={{
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    textDecoration: "underline",
                  }}
                >
                  shop now
                </span>
              </MjmlButton>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection padding="10px 0 30px">
            <MjmlColumn>
              <MjmlButton
                padding="0px"
                font-family="Inter, Arial, sans-serif"
                href="http://www.ugg.com/"
                font-size="16px"
                width="270px"
                color="#111111"
                background-color="#f9f9f9"
              >
                <span
                  style={{
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    textDecoration: "underline",
                  }}
                >
                  shop in store
                </span>
              </MjmlButton>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
        <MjmlWrapper padding="0px">
          <MjmlSection background-color="#f9f9f9">
            <MjmlColumn width="270px">
              <MjmlImage
                href="http://www.ugg.com/"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/secondary.jpg"
                alt="Guy on a beach with an UGGxGrain surfboard"
                width="270px"
              ></MjmlImage>
            </MjmlColumn>
            <MjmlColumn width="270px">
              <MjmlText
                color="#111"
                font-size="30px"
                line-height="30px"
                padding="30px 10px 15px"
                text-transform="uppercase"
                font-family="Big Caslon, Garamond, Times, serif"
                align="center"
              >
                uggxgrain
                <br />
                surfboards
                <br />
                giveaway.
              </MjmlText>
              <MjmlText
                fontFamily="Inter"
                lineHeight={24}
                align="center"
                padding="5px 15px"
              >
                Enter for a chance to win a custom UGGxGrain surfboard and a
                $200 UGG giftcard.
              </MjmlText>
              <MjmlButton
                background-color="#111"
                color="#f3b656"
                font-family="Inter, Arial, sans-serif"
                font-size="16px"
                align="center"
                padding="15px 10px"
                width="190px"
                height="40px"
                border-radius="0px"
                href="http://www.ugg.com/"
              >
                <span style={{ textTransform: "uppercase", letterSpacing: 2 }}>
                  enter to win
                </span>
              </MjmlButton>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
        <MjmlWrapper background-color="#f9f9f9" padding="40px 0 0">
          <MjmlSection background-color="#f9f9f9">
            <MjmlColumn>
              <MjmlImage
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/rewards-logo-top.gif"
                alt="Shop rewards"
                width="600px"
              ></MjmlImage>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection background-color="#000">
            <MjmlColumn>
              <MjmlText
                align="center"
                fontFamily="Inter"
                padding="15px 15px"
                letterSpacing={2}
                text-transform="uppercase"
                font-size="18px"
                color="#fff"
              >
                Earn points
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection background-color="#000">
            <MjmlColumn>
              <MjmlText
                fontFamily="Inter"
                align="center"
                padding="5px 15px"
                color="#fff"
              >
                When you shop, share, or review products.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection padding="10px 0 30px" background-color="#000">
            <MjmlColumn>
              <MjmlButton
                padding="0px"
                href="http://www.ugg.com/"
                font-size="16px"
                width="270px"
                color="#fff"
                background-color="#111"
                font-family="Inter, Arial, sans-serif"
              >
                <span
                  style={{
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    textDecoration: "underline",
                  }}
                >
                  join now
                </span>
              </MjmlButton>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
        <MjmlSection padding="25px 0 15px">
          <MjmlColumn>
            <MjmlImage
              alt="Find a store"
              href="http://www.ugg.com/"
              width="168px"
              src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/find-a-store.gif"
            ></MjmlImage>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="10px 0">
          <MjmlColumn>
            <MjmlButton
              padding="5px 2px"
              MjmlClass="open-sans-button"
              border-radius="0px"
              href="http://www.ugg.com/women"
              width="100%"
            >
              <span style={{ letterSpacing: 2 }}>women</span>
            </MjmlButton>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlButton
              padding="5px 2px"
              MjmlClass="open-sans-button"
              border-radius="0px"
              href="http://www.ugg.com/men"
              width="100%"
            >
              <span style={{ letterSpacing: 2 }}>men</span>
            </MjmlButton>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlButton
              padding="5px 2px"
              MjmlClass="open-sans-button"
              border-radius="0px"
              href="http://www.ugg.com/kids"
              width="100%"
            >
              <span style={{ letterSpacing: 2 }}>kids</span>
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText
              font-family="Inter, Arial"
              font-size="16px"
              align="center"
              text-transform="uppercase"
              font-weight="bold"
              letter-spacing="2px"
            >
              free shipping. free returns *
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlGroup>
            <MjmlColumn>
              <MjmlImage
                alt="ugg facebook"
                href="http://www.ugg.com/"
                width="40px"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-facebook.gif"
              ></MjmlImage>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
                alt="ugg instagram"
                href="http://www.ugg.com/"
                width="40px"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-instagram.gif"
              ></MjmlImage>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
                alt="ugg snapchat"
                href="http://www.ugg.com/"
                width="40px"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-snapchat.gif"
              ></MjmlImage>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
                alt="ugg pinterest"
                href="http://www.ugg.com/"
                width="40px"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-pinterest.gif"
              ></MjmlImage>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
                alt="ugg twitter"
                href="http://www.ugg.com/"
                width="40px"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-twitter.gif"
              ></MjmlImage>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
                alt="ugg youtube"
                href="http://www.ugg.com/"
                width="40px"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-youtube.gif"
              ></MjmlImage>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
                alt="ugg blog"
                href="http://www.ugg.com/"
                width="40px"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-blog.gif"
              ></MjmlImage>
            </MjmlColumn>
          </MjmlGroup>
        </MjmlSection>
        <MjmlSection padding="10px 45px">
          <MjmlGroup>
            <MjmlColumn width="27%">
              <MjmlText
                padding="7px 0"
                text-transform="uppercase"
                font-family="Inter, Arial, sans-serif"
                font-size="12px"
                text-decoration="none"
                align="center"
              >
                <a
                  href="http://www.ugg.com/"
                  style={{ textDecoration: "none", color: "#111111" }}
                  className="apple-link-black"
                >
                  <strong>live chat</strong>
                </a>
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn width="46%">
              <MjmlText
                padding="7px 0"
                text-transform="uppercase"
                font-family="Inter, Arial, sans-serif"
                font-size="11px"
                text-decoration="none"
                align="center"
              >
                <a
                  href=""
                  style={{ textDecoration: "none", color: "#111111" }}
                  className="apple-link-black"
                >
                  <strong>call us</strong>
                  <br />1 (888) 432-8530
                </a>
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn width="27%">
              <MjmlText
                padding="7px 0"
                text-transform="uppercase"
                font-family="Inter, Arial, sans-serif"
                font-size="12px"
                text-decoration="none"
                align="center"
              >
                <a
                  href="http://www.ugg.com/"
                  style={{ textDecoration: "underline", color: "#111111" }}
                  className="apple-link-black"
                >
                  <strong>email us</strong>
                </a>
                <br />
                <br />
              </MjmlText>
            </MjmlColumn>
          </MjmlGroup>
        </MjmlSection>
        <MjmlSection padding="0px">
          <MjmlColumn>
            <MjmlText MjmlClass="footer-text" align="center" padding="0 10px">
              <p
                style={{
                  margin: 0,
                  paddingBottom: 10,
                  fontSize: 10,
                  lineHeight: "15px",
                  marginBottom: 10,
                  color: "#111111",
                  fontFamily:
                    "'Inter', 'Raleway', Arial, Helvetica, sans-serif",
                }}
              >
                We only send emails to individuals who have registered at our
                site:
                <a
                  href="http://www.ugg.com/"
                  style={{ textDecoration: "underline", color: "#111111" }}
                >
                  www.ugg.com
                </a>
              </p>
              <p
                style={{
                  margin: 0,
                  paddingBottom: 10,
                  fontSize: 10,
                  lineHeight: "15px",
                  marginBottom: 10,
                  color: "#111111",
                  fontFamily:
                    "'Inter', 'Raleway', Arial, Helvetica, sans-serif",
                }}
              >
                *A free return label will be included with your order. This
                offer only applies to full price orders shipped within the
                continental United States and placed on
                <span className="apple-link-black">ugg.com</span>. Please note
                this offer does not apply to clearance product.
              </p>
              <p
                style={{
                  margin: 0,
                  paddingBottom: 10,
                  fontSize: 10,
                  lineHeight: "15px",
                  marginBottom: 10,
                  color: "#111111",
                  fontFamily:
                    "'Inter', 'Raleway', Arial, Helvetica, sans-serif",
                }}
              >
                <span style={{ textDecoration: "none", color: "#111111" }}>
                  <strong>1.888.432.8530</strong>
                  <br /> 123 North Leroux Street, Flagstaff, AZ 86001
                </span>
                <br />
                <a
                  href="http://www.ugg.com/"
                  style={{ textDecoration: "underline", color: "#111111" }}
                >
                  <strong>Privacy Policy</strong>
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a
                  href="http://www.ugg.com/"
                  style={{ textDecoration: "underline", color: "#111111" }}
                >
                  <strong>Unsubscribe</strong>
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a
                  href="https://email.ugg.com/pub/sf/ResponseForm?_ri_=X0Gzc2X%3DYQpglLjHJlTQGjmR9kDzfwzbMzackp9f3F8d45ze2zfbW8hYB6AzgB7gaIYB3tN5qwvasVXMtX%3DYQpglLjHJlTQGNXlMNF3fFUYHWCzdBj2rGzgJpzem2KonGoezgzbfUyABevzgl4CepTMC&_ei_=EolaGGF4SNMvxFF7KucKuWP7XpARYKtbBY43fLBYxvXNpGx2Z89j4M"
                  style={{ textDecoration: "underline", color: "#111111" }}
                >
                  View in Browser
                </a>
              </p>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};
