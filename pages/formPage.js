import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, TouchableOpacity, ScrollView, Li, SafeAreaView } from 'react-native'
import { StatusBar } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-radio-buttons-group';

const FormPage = () => {
    const [form, setForm] = useState([
        {
            key: 0,
            question: "¿Tienes mascotas actualmente en tu hogar?",
            options: ["Si", "No"],
            isOpenEnded: false,
            response: "",


        },
        {
            key: 1,
            question: "¿En qué tipo de vivienda reside?",
            options: [
                "Apartamento",
                "Casa",
                "Finca",
                "Otro",
            ],
            isOpenEnded: false,
            response: "",

        },
        {
            key: 2,
            question: "¿Cuántas personas viven contigo?",
            options: [],
            isOpenEnded: true,
            response: "",
            questionType: "numeric",

        },
        {
            key: 3,
            question: "¿Las personas que viven contigo están de acuerdo en recibir a un perrito dentro del hogar?",
            options: ["Si", "No"],
            isOpenEnded: false,
            response: "",

        },
        {
            key: 4,
            question: "¿erigei?",
            options: [],
            isOpenEnded: true,
            response: "",
            questionType: "default",

        },

    ]);

    const handleQuestion = (key, response) => {
        const formClone = JSON.parse(JSON.stringify(form));
        formClone[key].response = response;
        setForm(formClone);
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingTop: StatusBar.currentHeight + 50, paddingLeft: 30, paddingRight: 30 }}>
                {form.map((parentQuestion) =>
                (
                    <View>
                        <Text key={parentQuestion.key}>{parentQuestion.question}</Text>
                        {parentQuestion.isOpenEnded ?

                            <TextInput
                                placeholder=':)'
                                value={parentQuestion.response}
                                onChangeText={text => handleQuestion(parentQuestion.key, text)}
                                keyboardType={parentQuestion.questionType}
                            ></TextInput>
                            :
                            // parentQuestion.options.map((childOption) => (
                            //     <Text>{childOption}</Text>
                            // ))

                            parentQuestion.options.map((childOption) => (
                                <RadioButton label={childOption}>{childOption}</RadioButton>
                            ))

                        }
                    </View>
                )
                )}

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FormPage;