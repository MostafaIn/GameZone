import React from 'react'
import { View, TextInput, Button } from 'react-native'
import {globalStyles} from '../styles/global'
import {Formik} from 'formik'

const ReviewForm = ({addReview}) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ name:'', age:'', email:'', rating:''}}
                onSubmit={(values, actions)=>{
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) =>(
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Your Name"
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Your Age"
                            onChangeText={props.handleChange('age')}
                            value={props.values.age}
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Your Email"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1 - 5)"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType="numeric"
                        />
                        <Button
                            title="SUBMIT"
                            color="maroon"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm
