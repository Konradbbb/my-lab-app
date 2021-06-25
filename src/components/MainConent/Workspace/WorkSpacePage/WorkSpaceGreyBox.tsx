import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';


const GreyBoxWrapper = styled.div`
    // border: 2px solid red;
    width: 99%;
    height: 350px;
    background: ${Colors.veryLightGrey};
    border-top: 1px solid ${Colors.grey};
    border-bottom: 1px solid ${Colors.grey};
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 0.5%;
    border-radius: 3px;
`;

const GreyBoxTitleBox = styled.div`
    width: 97.7%;
    margin: 10px;
    // border: 1px solid red;
    height: 30px;
    display: flex;
    justify-content: space-between;
`;

const GreyBoxTitle = styled.div`
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    color: ${Colors.grey};
    width: 50%;
    // border: 1px solid red;
    padding-top: 6px;

`;

const GreyBoxTitle2 = styled(GreyBoxTitle)`
    text-align: right;
`;  

const GreyBoxContentWrapper = styled.div`
    // border: 1px solid green;
    width: 97.7%;
    display: flex;
    height: 280px;
    margin: 10px;
`;

const GreyBoxConentMiniBox = styled.div`
    // border: 1px solid red;
    position: relative;
    background: ${Colors.white};
    border-radius: 5px;
    box-shadow: 1px 2px 3px ${Colors.lightGrey};
    width: 300px;
    height: 220px;
    margin: 18px;
    display: block;
    padding: 10px;
    &:hover {
        box-shadow: 1px 3px 7px ${Colors.lightBlue};
    }
`;

const MiniBoxPicture = styled.img`
    // border: 1px solid blue;
    width: 60px;
    height: 60px;
    
`;

const MiniBoxPicture2 = styled(MiniBoxPicture)`
    position: absolute;
    opacity: 0.07;
    left: 48%;
    top: 30%;
    height: 150px;
    width: 150px;

`;

const MiniBoxTitle = styled.div`
    font-family: Arial;
    font-size: 15px;
    color: ${Colors.darkBlue};
    // border: 1px solid red;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    height: 30px;
    display: flex;
    font-weight: bold;

    
`;

const MiniBoxContent = styled.div`
    width: 100%;
    height: 100px;
    // border: 1px solid green;
    font-family: Arial;
    font-size: 13px;
    color: ${Colors.darkBlue};
`;

export const WorkSpaceGreyBox: FC = () => {


    return (
        <GreyBoxWrapper>
            <GreyBoxTitleBox>
                <GreyBoxTitle>Start working on corporate matters</GreyBoxTitle>
                <GreyBoxTitle2>Hide</GreyBoxTitle2>
            </GreyBoxTitleBox>
            <GreyBoxContentWrapper>
                <GreyBoxConentMiniBox>
                    <MiniBoxPicture className='icon' src='../media/icons/entities.svg'/>
                    <MiniBoxTitle>Explore your entities</MiniBoxTitle>
                    <MiniBoxContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur porro? Eum aliquam voluptas, ratione eveniet aperiam ducimus unde voluptatibus rem accusamus voluptate aut nisi laboriosam adipisci nihil eos tempora?</MiniBoxContent>
                    <MiniBoxPicture2 src='../media/icons/entities.svg'/>
                </GreyBoxConentMiniBox>

                <GreyBoxConentMiniBox>
                    <MiniBoxPicture className='icon' src='../media/icons/diagram.svg'/>
                    <MiniBoxTitle>Explore your network</MiniBoxTitle>
                    <MiniBoxContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur porro? Eum aliquam voluptas, ratione eveniet aperiam ducimus unde voluptatibus rem accusamus voluptate aut nisi laboriosam adipisci nihil eos tempora?</MiniBoxContent>
                    <MiniBoxPicture2 src='../media/icons/diagram.svg'/>
                </GreyBoxConentMiniBox>

                <GreyBoxConentMiniBox>
                    <MiniBoxPicture className='icon' src='../media/icons/calendar.svg'/>
                    <MiniBoxTitle>Explore your calendar</MiniBoxTitle>
                    <MiniBoxContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur porro? Eum aliquam voluptas, ratione eveniet aperiam ducimus unde voluptatibus rem accusamus voluptate aut nisi laboriosam adipisci nihil eos tempora?</MiniBoxContent>
                    <MiniBoxPicture2 src='../media/icons/calendar.svg'/>
                </GreyBoxConentMiniBox>

                <GreyBoxConentMiniBox>
                    <MiniBoxPicture className='icon' src='../media/icons/world.svg'/>
                    <MiniBoxTitle>Explore your 5G</MiniBoxTitle>
                    <MiniBoxContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur porro? Eum aliquam voluptas, ratione eveniet aperiam ducimus unde voluptatibus rem accusamus voluptate aut nisi laboriosam adipisci nihil eos tempora?</MiniBoxContent>
                    <MiniBoxPicture2 src='../media/icons/world.svg'/>
                </GreyBoxConentMiniBox>
            </GreyBoxContentWrapper>
        </GreyBoxWrapper>
    );
};