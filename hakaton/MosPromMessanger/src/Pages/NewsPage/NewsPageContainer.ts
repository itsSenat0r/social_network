import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import axios, { AxiosResponse } from 'axios';
import { CardNewsType } from '../../Components/CardNewsList/CardNewsList';
import achievementsButtonBackImg from '../../assets/images/achievementsButtonBackImage.png';

export const NewsPageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
}))

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export async function getData(url: string): Promise<CardNewsType[] | null> {
  try {
    const response: AxiosResponse<any[]> = await axios.get(url);
    console.log("Ответ от сервера:", response.data);

    const formattedData: CardNewsType[] = response.data.map((item) => ({
      id: String(item.id),
      headerText: item.postType || "",
      authorImg: item.postAutorAvatar || "",
      authorName: item.postAutor || "",
      postData: item.postDate || "",
      smallDescription: item.postThumbnail || "",
      postPicture: item.postPicture || "",
      countLikes: item.postStatistic?.[0] || 0,
      countMessages: item.postStatistic?.[1] || 0,
      countReposts: item.postStatistic?.[2] || 0,
    }));

    return formattedData;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
}

export async function sendData<T>(url: string, payload: Record<string, any>): Promise<ApiResponse<T> | null> {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log("Ответ от сервера:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
    return null;
  }
}

export const GroupDescription = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundImage: `url(${achievementsButtonBackImg})`,
  backgroundSize: 'cover',
  backgroundColor: '#39283dff',
  borderRadius: '11px',
  paddingInline: '19px 6px',
  paddingBlock: '18px',
  marginInline: '12px 9px'
}))