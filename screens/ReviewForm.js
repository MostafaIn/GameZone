import React from 'react'
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import {globalStyles} from '../styles/global'

import {Formik} from 'formik'
import * as yup from 'yup'
import FlatButton from './FlatButton'

const reviewSchema = yup.object({
    name: yup.string().required().min(4),
    email: yup.string().required().email(),
    age: yup.number().min(18).required().positive().integer(),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', (val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0;
    }),

})

const ReviewForm = ({addReview}) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ name:'', age:'', email:'', rating:''}}
                validationSchema={reviewSchema}
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
                        <Text style={globalStyles.errorTxt}>{props.touched.name && props.errors.name}</Text>
                        
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Your Age"
                            onChangeText={props.handleChange('age')}
                            value={props.values.age}
                            keyboardType="numeric"
                        />
                        <Text style={globalStyles.errorTxt}>{props.touched.age && props.errors.age}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Your Email"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                        />
                        <Text style={globalStyles.errorTxt}>{props.touched.email && props.errors.email}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1 - 5)"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType="numeric"
                        />
                        <Text style={globalStyles.errorTxt}>{props.touched.rating && props.errors.rating}</Text>

                        <FlatButton text="submit" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm
