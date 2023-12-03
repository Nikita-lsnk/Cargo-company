import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { emailRegExp } from '../../utils/emailRegExp';
import { telRegExp } from '../../utils/telRegExp';
import ModalWindow from './ModalWindow';



const Survey = () => {

  const [checkedBox, setCheckedBox] = useState(true)

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState("");
  const [track, setTrack] = useState("");
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");

  const [check, setCheck] = useState([]);
  const [checkStr, setCheckStr] = useState("");




  // document.getElementById('checkbox_111').checked = false;

  const formValid = emailRegExp.test(email) && telRegExp.test(phone) && !!number && !!data && !!track && !!fullName;

  const [openModal, setOpenModal] = useState(false);

  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [numberValid, setNumberValid] = useState(true);
  const [dataValid, setDataValid] = useState(true);
  const [trackValid, setTrackValid] = useState(true);
  const [fullNameValid, setFullNameValid] = useState(true);


  function Submit(e) {
    e.preventDefault()
    console.log("formValid", formValid)
    if (formValid) {
      const formElem = document.querySelector("form")
      const formData = new FormData(formElem)
      fetch("https://script.google.com/macros/s/AKfycbwtKdZqXjbLiIwaM64I2P3nGzDqa7bSYT2rm9gWyh5lUODZ2eohPFWBMQdd8dqUxfyJOw/exec", {
        method: "POST",
        body: formData
      })
        .then((res) => {
          return res
        })
        .then((data) => {
          setOpenModal(!openModal)
        })
        .catch((err) => {
          console.log(err)
        })


    }
    else {
      setEmailValid(emailRegExp.test(email))
      setPhoneValid(telRegExp.test(phone))
      setNumberValid(!!number.length)
      setDataValid(!!data.length)
      setTrackValid(!!track.length)
      setFullNameValid(!!fullName.length)

    }
  }

  console.log("emailValid", emailValid);


  useEffect(() => {
    setCheckStr(check.map(el => el.value).join(', ') || "")
  }, [check])

  function onCheck(e) {
    if (e.target.checked) {
      setCheck([...check, { id: e.target.id, value: e.target.value }])
    }
    else {
      setCheck(check.filter(el => el.id !== e.target.id))
    }
  }

  useEffect(() => {
  }, [checkStr])

  useEffect(() => {
    if (emailValid === false) {
      setEmailValid(emailRegExp.test(email))
    }
  }, [email])
  useEffect(() => {
    if (phoneValid === false) {
      setPhoneValid(telRegExp.test(phone))
    }
  }, [phone])

  useEffect(() => {
    if (numberValid === false) {
      setNumberValid(!!number.length)
    }
  }, [number])

  useEffect(() => {
    if (dataValid === false) {
      setDataValid(!!data.length)
    }
  }, [data])

  useEffect(() => {
    if (trackValid === false) {
      setTrackValid(!!track.length)
    }
  }, [track])

  useEffect(() => {
    if (fullNameValid === false) {
      setFullNameValid(!!fullName.length)
    }
  }, [fullName])


  return (
    <Wrapper>
      <Container>
        <FormBlock onSubmit={(e) => Submit(e)}>
          <InputBox>
            <InputContainer>
              <TitleEntry>Poptávkový formulář</TitleEntry>
              <LabelRadio>
                <EntryRadio
                  // onClick={CheckOn}
                  type="radio"
                  name="ApplicationForm"
                  id="checkbox_1"
                  value="Nezávazná poptávka"
                />
                <TitleRadio htmlFor="checkbox_1">Nezávazná poptávka</TitleRadio>
              </LabelRadio>
              <LabelRadio>
                <EntryRadio
                  // onClick={CheckOn}
                  type="radio"
                  name="ApplicationForm"
                  id="checkbox_2"
                  value="Závazná objednávka"
                />
                <TitleRadio htmlFor="checkbox_2">Závazná objednávka</TitleRadio>
              </LabelRadio>
            </InputContainer>
            <InputContainer>
              <TitleEntry>Vyberte kategorii</TitleEntry>
              <LabelRadio>
                <EntryRadio
                  // onClick={CheckOn}
                  type="radio"
                  name="Category"
                  id="checkbox_1"
                  value="Autobusová přeprava"
                />
                <TitleRadio htmlFor="checkbox_1">Autobusová přeprava</TitleRadio>
              </LabelRadio>
              <LabelRadio>
                <EntryRadio
                  // onClick={CheckOn}
                  type="radio"
                  name="Category"
                  id="checkbox_1"
                  value="Privátní osobní přeprava"
                />
                <TitleRadio htmlFor="checkbox_1">Privátní osobní přeprava</TitleRadio>
              </LabelRadio>
              <LabelRadio>
                <EntryRadio
                  // onClick={CheckOn}
                  type="radio"
                  name="Category"
                  id="checkbox_1"
                  value="Mezinárodní nákladní doprava"
                />
                <TitleRadio htmlFor="checkbox_1">Mezinárodní nákladní doprava</TitleRadio>
              </LabelRadio>
            </InputContainer>
            <InputContainer>
              <TitleEntry>Počet cestujících</TitleEntry>
              <Entry
                onChange={(e) => { setNumber(e.target.value) }}
                type="text"
                name="Number"
                placeholder="Enter your number"
                value={number}
                $highlight={!numberValid}
              />
            </InputContainer>
            <InputContainer>
              <TitleEntry>Termín</TitleEntry>
              <Entry
                onChange={(e) => { setData(e.target.value) }}
                type="text"
                name="Data"
                placeholder="Enter your data"
                value={data}
                $highlight={!dataValid}
              />
            </InputContainer>
            <InputContainer>
              <TitleEntry>Trasa Vaši jízdy</TitleEntry>
              <Entry
                onChange={(e) => { setTrack(e.target.value) }}
                type="text"
                name="Track"
                placeholder="Enter your track"
                value={track}
                $highlight={!trackValid}
              />
            </InputContainer>
          </InputBox>
          <TitleInput>Informace o vás</TitleInput>
          <InputBox>
            <InputContainer>
              <TitleEntry>Celé Jméno/ Název firmy</TitleEntry>
              <Entry
                onChange={(e) => { setFullName(e.target.value) }}
                type="text"
                name="FullName"
                placeholder="Enter your full name"
                value={fullName}
                $highlight={!fullNameValid}
              />
            </InputContainer>
            <InputContainer>
              <TitleEntry>Email </TitleEntry>
              <Entry
                onChange={(e) => { setEmail(e.target.value) }}
                type="email"
                name="Email"
                placeholder="Enter your email"
                value={email}
                $highlight={!emailValid}


              />
            </InputContainer>
            <InputContainer>
              <TitleEntry>Phone</TitleEntry>
              <Entry
                onChange={(e) => { setPhone(e.target.value) }}
                type="text"
                name="Phone"
                placeholder="Enter your number"
                value={phone}
                $highlight={!phoneValid}
              />
            </InputContainer>
          </InputBox>
          <TitleInput>Chcete něco upřesnit?</TitleInput>
          <InputBox>
            <InputContainer>
              <TitleEntry>Poznámky</TitleEntry>
              <Entry
                onChange={(e) => { setDescription(e.target.value) }}
                type="text"
                name="Description"
                placeholder="Enter your description"
                value={description}
                
              />
            </InputContainer>
          </InputBox>
          <MainButton>
            <EntrySend
              type="submit"
              value="Send"
            />
          </MainButton>

        </FormBlock>

      </Container>
      {openModal && (
        <ModalWindow />
      )}

    </Wrapper>
  )
}

export default Survey

const TitleInput = styled.span`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: 4px solid  #3256A4;
  width: fit-content;
`;

const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const MainTitleEntry = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;


const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 600px; */
  border-radius: 20px;
  gap: 50px;
  background-color: #ffffff;
  /* padding: 30px 50px; */
  
`;

const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  /* width: 100%; */
`;

const Input = styled.input`
  display: none;
`;

const TitleEntry = styled.span`
  font-size: 13px;
  font-weight: 700;
  
`;
const Entry = styled.input`
  font-family: 'Montserrat Regular';
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #D7D7D7;
  outline: none;
  transition: 0.3s;
  font-size: 16px;
  width: 350px;
  height: 20px;
  border-bottom: 2px solid  ${(props) => props.$highlight ? "red" : "#D7D7D7"};
  box-shadow: none;
  border-radius: unset;
`;
const LabelRadio = styled.label`
  display: flex;
  width: 500px;
  gap: 10px;
  &:hover, :focus{
    cursor: pointer;
  }
  @media screen and (max-width: 650px){
    width: fit-content;
  }
`;
const EntryRadio = styled.input``;

const TitleRadio = styled.span`
  font-size: 15px; 
`;
const LabelCheckBox = styled.label`
  display: flex;
  width: 500px;
  gap: 10px;
  :hover, :focus{
    cursor: pointer;
  }
  @media screen and (max-width: 650px){
    width: fit-content;
  }
`;
const EntryCheck = styled.input` 

`;

const TitleCheck = styled.span`
  font-size: 15px;
  
`;
const MainButton = styled.div`
  display: flex;
  width: 500px;
  justify-content: flex-start;
  @media screen and (max-width: 650px){
    width: fit-content;
    gap: 40px;
  }
`;
const EntrySend = styled.input`
  padding: 15px 45px;
  background-color: #f0e319;
  border: none;
  height: fit-content;
  color: #292a2d;
  font-size: 18px;
  font-weight: 700;
  /* z-index: 100; */
  width: fit-content;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.99);
  }
`;
