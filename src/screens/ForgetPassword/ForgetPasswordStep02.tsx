import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
// const logo = require('../assets/images/logo.png');
// import {} from ';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS, SIZES, FONTS, icons } from '../../constants';
import {
    TextButton
} from '../../components';
import OTPTextView from 'react-native-otp-textinput';
import IconButton from '../../components/IconButton';

const ForgetPasswordStep02 = ({ navigation, route }: { navigation: any; route: any; }) => {
    const [showPass, setShowPass] = React.useState(false);
    const [userForm, setUserForm] = React.useState({ ...route.params?.userForm, code: '' });
    // console.log('route.params', route.params?.userForm)
    return (
        <SafeAreaView className='flex-1 justify-center'
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}>
            <IconButton
            icon={icons.back} 
            containerStyle={{
                // backgroundColor: COLORS.primary,
                marginLeft: SIZES.padding,
                marginTop: SIZES.padding,

                width: 50,
                height: 50,
                borderRadius: 50/2,
                backgroundColor: COLORS.gray10,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            iconStyle={{
                tintColor: COLORS.primary,
            }}
            onPress={() => navigation.goBack()}
            />
            <Text className='' style={{
                ...FONTS.h1,
                paddingHorizontal: SIZES.padding,
                marginTop: 60,
                color: COLORS.black
            }}>
                Reset Password Step 2
            </Text>
            <Text className='text-red-300' style={{
                ...FONTS.body3,
                color: COLORS.gray30,
                paddingHorizontal: SIZES.padding,
                marginTop: 10,
            }}>
                Verify your Email
            </Text>

            <View
                className={`rounded-t-[${SIZES.radius}]  mt-[24] px-[20] py-[20]`}
                style={{
                    flex: 1,
                    marginTop: SIZES.padding,
                    backgroundColor: COLORS.primary,
                    borderTopEndRadius: SIZES.radius,
                    borderTopLeftRadius: SIZES.radius,
                    borderWidth: 1,
                    borderColor: COLORS.gray10
                }}>

                
                <Text className='mt-[20]'
                    style={{
                        ...FONTS.body3,
                        fontSize: 18,
                        color: COLORS.white,
                    }}>
                    Please check your{' '}
                    <Text className=''
                        style={{
                            ...FONTS.h2,
                            textDecorationLine: 'underline',
                            fontSize: 18,
                            color: COLORS.white
                        }}>{route.params?.userForm.email}</Text>
                </Text>


                <OTPTextView
                    handleTextChange={(code: string) => setUserForm({ ...userForm, code })}
                    inputCount={6}
                    containerStyle={{
                        marginTop: 20,
                    }}
                    tintColor={COLORS.primary2}
                    offTintColor={'transparent'}
                    textInputStyle={{
                        borderWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: COLORS.primary2,
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white,
                        ...FONTS.h3,
                    }} />
                <View className='flex-row justify-between items-center px-[10] mt-[10] '>
                    <Text className='text-white justify-center'>
                        Resend code in{' '}
                        <Text className='text-red-500 font-bold'>30s</Text>
                    </Text>
                    <TouchableOpacity>
                        <Text className='text-white font-semibold underline'>Resend Code</Text>
                    </TouchableOpacity>
                </View>

                <TextButton
                    customContainerClassName='mt-[80]'
                    customContainerStyle={{
                        height: 55,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white,
                        paddingHorizontal: 10,
                    }}
                    customLabelStyle={{
                        ...FONTS.h3,
                        fontSize: 18,
                        color: COLORS.primary
                    }}
                    label='Verify'
                    onPress={() => navigation.navigate('ForgetPasswordStep03', { userForm })}
                />

                <View className='flex-row items-center justify-center  mt-[40]'>
                    <Text
                        className='text-center'
                        style={{
                            color: COLORS.white,
                            ...FONTS.body3,
                            fontSize: 16
                        }}>
                    </Text>
                    <TouchableOpacity
                        className=''
                        onPress={() => navigation.navigate('Login')}>
                        <Text
                            className='text-center underline'
                            style={{
                                color: COLORS.white,
                                ...FONTS.h4,
                                fontSize: 16
                            }}>
                            Cancle?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ForgetPasswordStep02;