import React, {useEffect, useState} from 'react';
import {
   View,
   Text,
   StyleSheet,
   Button
  } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { authorize, logout } from '../modules/authSlice';
import { RootState } from "../reducer";


export function LoginContainer () {
    //상태 가지고오기
    const user = useSelector((state:RootState)=>state.auth.user);
    //액션 함수 전달하기
    const dispatch = useDispatch();
    const onPressLogin = () => {
        dispatch(
            authorize({
                id:1,
                username:'namhyeon',
                displayName:'nam'
            }),
        )
    }
    const onPressLogout = () =>{
        dispatch(logout());
    }

    return (
        <View style={styles.sectionContainer}>
            <Text>
                {user!==null?user.displayName:'로그인하세요'}
            </Text>
            <View>
                <Button title='로그인' onPress={onPressLogin}/>
                <Button title='로그아웃' onPress={onPressLogout}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });