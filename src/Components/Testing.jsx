import {ScrollContainer, MediumText , Animator , ScrollPage ,batch, Sticky, MoveOut } from 'react-scroll-motion'

function Testig () {
    return ( 
<>

<ScrollContainer snap="mandatory">
  <ScrollPage page={0}>
    <Animator animation={batch( Sticky(), MoveOut(0, -200))}>
      <MediumText>Let't me show you scroll animation 😀</MediumText>
    </Animator>
  </ScrollPage>
  </ScrollContainer>



</>
     );
}

export default Testig ;