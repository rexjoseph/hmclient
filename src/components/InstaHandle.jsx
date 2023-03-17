import styled from "styled-components"

const HandleSection = styled.div`
  float: left;
  width: 100%;
  padding: 0px 0 30px;
  margin: 0;
`

const InstaText = styled.div`
  float: left;
  width: 100%;
  font-size: 28px;
  letter-spacing: -1.11px;
  text-align: center;
`

const InstaButton = styled.a`
  padding: 0 15px;
  color: var(--color-primary);
`

const Marquee = styled.div`
  width: 100%;
  overflow: hidden
`

const Inner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`
const Text = styled.p`
  letter-spacing: -0.84px;
  white-space: nowrap;
  padding: 0;
  clear: none;
  margin: 0;
  font-size: 28px;
  line-height: normal;
  animation: scroll-left 7s linear infinite;

  @keyframes scroll-left {
    0% {
      -moz-transform: translateX(0);
      -webkit-transform: translateX(0); */
      transform: translate(0);
    }
    100% {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translate(-100%);
    }
  }
`
const TextSpan = styled.span`
  padding-left: 26px;
  letter-spacing: 0;
  font-style: italic;
  font-size: 22px;
  color: var(--color-grey);
`
const TextStrong = styled.strong`
  font-weight: 600;
`
const TextItalic = styled.i`
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  padding: 0 15px
`

const InstaHandle = () => {
  return (
    <HandleSection>
      <InstaText>
        <InstaButton href="https://instagram.com/wearehashingmart" target="_blank" rel="noreferrer">
          <Marquee>
            <Inner>
              <Text>
                <TextSpan>Follow us</TextSpan>
                <TextStrong>
                  <TextItalic>@hashingmart</TextItalic>
                  @hashingmart
                </TextStrong>
              </Text>
              <Text>
                <TextSpan>Follow us</TextSpan>
                <TextStrong>
                  <TextItalic>@hashingmart</TextItalic>
                  @hashingmart
                </TextStrong>
              </Text>
              <Text>
                <TextSpan>Follow us</TextSpan>
                <TextStrong>
                  <TextItalic>@hashingmart</TextItalic>
                  @hashingmart
                </TextStrong>
              </Text>
              <Text>
                <TextSpan>Follow us</TextSpan>
                <TextStrong>
                  <TextItalic>@hashingmart</TextItalic>
                  @hashingmart
                </TextStrong>
              </Text>
              <Text>
                <TextSpan>Follow us</TextSpan>
                <TextStrong>
                  <TextItalic>@hashingmart</TextItalic>
                  @hashingmart
                </TextStrong>
              </Text>
              <Text>
                <TextSpan>Follow us</TextSpan>
                <TextStrong>
                  <TextItalic>@hashingmart</TextItalic>
                  @hashingmart
                </TextStrong>
              </Text>
              <Text>
                <TextSpan>Follow us</TextSpan>
                <TextStrong>
                  <TextItalic>@hashingmart</TextItalic>
                  @hashingmart
                </TextStrong>
              </Text>
              <Text>
                <TextSpan>Follow us</TextSpan>
                <TextStrong>
                  <TextItalic>@hashingmart</TextItalic>
                  @hashingmart
                </TextStrong>
              </Text>
              <Text>
                <TextSpan>Follow us</TextSpan>
                <TextStrong>
                  <TextItalic>@hashingmart</TextItalic>
                  @hashingmart
                </TextStrong>
              </Text>
              <Text>
                <TextSpan>Follow us</TextSpan>
                <TextStrong>
                  <TextItalic>@hashingmart</TextItalic>
                  @hashingmart
                </TextStrong>
              </Text>
            </Inner>
          </Marquee>
        </InstaButton>
      </InstaText>
    </HandleSection>
  )
}

export default InstaHandle