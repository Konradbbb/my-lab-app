import { FC } from 'react';
import styled from 'styled-components';
import { HeaderWrapper, PicturePublications } from '../HeaderPublications/HeaderPublications';
import { ItemDataInfo } from '../HeaderPublications/HeaderPublications';
import { Colors } from '../../../styledHelpers/Colors';

const WorkSpaceWrapper = styled(HeaderWrapper)`
    height: 280px;
    display: flex;
    background: ${Colors.erty};
    box-shadow: none;
    
    // border: 1px solid green;

`;

const WorkSpaceSlider = styled.div`
    overflow: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
        display: none;
    }
    // border: 2px solid blue;
    width: 100%;
    height: 280px;
    display: inline-block;
    background: ${Colors.erty};

`;

const WorkSpaceItems = styled.div`
    // border: 1px solid red;
    // overflow: auto;
    margin: 2%;
    // margin-top: 50px;
    height: 80%;
    width: 25%;
    display: inline-block;
    border-radius: 6px;
    background: ${Colors.white};
    box-shadow: 1px 1px 2px grey;
    &:hover {
        box-shadow: 1px 2px 7px ${Colors.lightBlue};
    }
`;

const ItemIcon = styled(PicturePublications)`
    
    border-radius: 5px;
    box-shadow: 1px 1px 6px ${Colors.lightGrey};
    height: 90px;
    position: relative;
    bottom: 30%;
    left: 5%;
`;

const ItemPicture = styled.img`
    
    background: green;
    width: 101%;
    height: 40%;
    left: 0%; 
    padding: none;
    margin: -1px;
    border-radius: 8px;
    
`;

const ItemTitle = styled.div`
    // border: 1px solid blue;
    margin-top: 5%;
    margin-left: 38%;
    width: 60%;
    font-family: Arial;
`;

const ItemContent = styled.div`
    // border: 1px solid black;
    margin-top: -40px;
    width: 90%;
    height: 20px;
    padding-left: 15px;
    justify-content: space-between;
    font-family: Arial;
    font-size: 15px;
    color: ${Colors.grey};
`;

const ItemContentPicture = styled.img`

`;

const ItemInfo = styled(ItemDataInfo)`
    // border: 1px solid green;
    margin-top: 0px;
    height: 20px;
    width: 80%;
    text-align: left;
    padding-left: 15px;
    font-family: Arial;

`;




export const WorkSpace: FC = () => {


    return (
        <WorkSpaceWrapper>
            <WorkSpaceSlider>

            
            <WorkSpaceItems>
                <ItemPicture/>
                <ItemTitle>Konrad</ItemTitle>
                <ItemIcon/>
                <ItemContent>Konrad Baran</ItemContent>
                <ItemInfo>Last update 2 days ago</ItemInfo>
            </WorkSpaceItems>

            <WorkSpaceItems>
                <ItemPicture/>
                <ItemTitle>Konrad</ItemTitle>
                <ItemIcon/>
                <ItemContent>Konrad Baran</ItemContent>
                <ItemInfo>Last update 2 days ago</ItemInfo>
            </WorkSpaceItems>

            <WorkSpaceItems>
                <ItemPicture/>
                <ItemTitle>Konrad</ItemTitle>
                <ItemIcon/>
                <ItemContent>Konrad Baran</ItemContent>
                <ItemInfo>Last update 2 days ago</ItemInfo>
            </WorkSpaceItems>

            <WorkSpaceItems>
                <ItemPicture/>
                <ItemTitle>Konrad</ItemTitle>
                <ItemIcon/>
                <ItemContent>Konrad Baran</ItemContent>
                <ItemInfo>Last update 2 days ago</ItemInfo>
            </WorkSpaceItems>


            <WorkSpaceItems>
                <ItemPicture/>
                <ItemTitle>Konrad</ItemTitle>
                <ItemIcon/>
                <ItemContent>Konrad Baran</ItemContent>
                <ItemInfo>Last update 2 days ago</ItemInfo>
            </WorkSpaceItems>

            <WorkSpaceItems>
                <ItemPicture/>
                <ItemTitle>Konrad</ItemTitle>
                <ItemIcon/>
                <ItemContent>Konrad Baran</ItemContent>
                <ItemInfo>Last update 2 days ago</ItemInfo>
            </WorkSpaceItems>

            <WorkSpaceItems>
                <ItemPicture/>
                <ItemTitle>Konrad</ItemTitle>
                <ItemIcon/>
                <ItemContent>Konrad Baran</ItemContent>
                <ItemInfo>Last update 2 days ago</ItemInfo>
            </WorkSpaceItems>
           
          
            </WorkSpaceSlider>
        </WorkSpaceWrapper>
    );
};