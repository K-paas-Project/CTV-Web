import {ButtonContainer, Container, Img, Info, InfoContent, InputContent, TitleContent} from "./ReportStyle";
import C2VText from "../../components/text/Text";
import CTVInput from "../../components/input/Input";
import {useState} from "react";
import CTVInputArea from "../../components/inputarea/InputArea";
import Color from "../../components/theme/color/Color";
import CTVButton from "../../components/button/Button";

export default function Report({model}) {

  const [content, setContent] = useState('');

  return (
    <Container>
      <TitleContent>
        <C2VText text={'신고하기'} type={'title'}/>
      </TitleContent>
      <Img src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAugMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQECAwYAB//EADoQAAEDAgMGAwcCBAcBAAAAAAEAAgMEEQUSIQYTMUFRYRQigTJScZGxwdGh8DNDYnMlNDVCU2OCI//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACERAQEAAgICAgMBAAAAAAAAAAABAhESIQMxE0EiMmEE/9oADAMBAAIRAxEAPwD5PlXrLfdqCwrtSYqVfIq5UdsqvBWIUWRBKkFVUosuvLy8AsDylSArBqwK2UWWuRTkQZjlUhq1Ea0ZHfghtmAYp3ZRbYlqIEu2LjF2UGLsmnhrqDTHohttlJi7Kpj7JsaYqhpihsdlRj7KuRNHUxVPDo7Ha+6XjCjmwq+4TJ8it0KydEm7qcrF1OsaZFZYo3aYmnPRV8OVtm2X7teyI/cFQYEdsDDFcMRQgVhCUShgxaNjRLYSmOEUkcmJUbZ25oXVEYkB4FuYX/RC3QbKGRh3DX4Lp9idnKfGsQlbXBxp4mAlrSQS4nTX0K+n12zOHYxh+6lp2RSMbZksbQHR9D3HZJdh8KmwvGcQoKltpGtbqODh5gCO2oUb5d49H46scxi+xXgNpKeiYXuopzmY93ENHtNJ6jr3CbbX4XHVUtDBSQtEjZRFG0C1mkHT4aBd/jUDJI45y3zNAe09NLFJ8KpxV1rnuaCIbBvYm/2uo3yXo/H2WRbHYbBs9Uxvha+fd/x3DzZ7XuOg04L5+yi0Gi+x47IKfB5QOL2OIt30C53BMCa0MlqWh0hPlZyBWmdhMsN2SODFC4Wu0i/C/NW8F2X0DaeOOQ08bACWX17aff6JH4Tsh8ieU1dOZdRdlm6i7Lp3Ug6LN1J2W+QNuXdRjoqeD7LpX0nZZeE7I/IGyKOJbtgWsMd0bHDddFqUpcafss3U1+SdiC/JQabshyNKQ+F7L3heyeeG7KwpOy3JSZEHhOyjwnZdD4S/JT4K/JHkO3OeE7LwpT0XR+C7LWjw6OWriZO7JG51nELcg2vshs5h2KQzGtdJvmus1rX5bCw178/kmVbsO+BpfQTGQe5JofQp9RbO0tM9s9BJLFIBbV+YO+Kf0by8buYZXjiLcVG53a08cs7CbNVT6mjY+QFtTF5JmH3gNfnx+aLq6RjMVpa6MeYtMJPUGxA9HAfNQ+ldTVIqqdtza0jPeCLeWVVMcjvK7UOPFrh97pKeTrTHEY89C5vNhc30PBKdn2Ww97+LpZXfYflOXyZ6d5I1cLkdHDQpLRybrC4GsHndmy/EuNkn2ZasArKi/wDKjdp6c/3zUzyMpoiPZJHD3W9FjJUNp2tYy7nAWaBzPVBuZJO7PM61+XEo2ltCy3qJXSOHYDoFm6AWTJkDBwCIjiHu37WU+NJ8dvtz7obKhiCZ11NJD5nxlrXHQlA6XSbc+XVCviCy3SMcs1uRLXMwNR8LEHAmMK7rSRqyMK+6CvGFqAk2YPuVdsIutwApAQ2aKNhC0FOCtWWREbQVuRwnhgvCjL3BrGlzjwATJsd1tT3gkD2hC5DpphsGLQNDfDufH0c5oI+Z19U9aJTGDPTPFuljY+iypMRpyLOkDD0fojxUQubcSRn/ANBLt0469bYNq8os5wcP6hYqjpI2l0rDuyRrfg74q8jmu1DwR1DkNPGx0Lw3iQeHVa0xNiGPxNmfHE4ebR3PXt++iBjrm7pphlBawZWg8Rrxt6pQ+mE0U0Be6OZt2F3Nrr8bc1GBCSCpbFObkA3N9CvAz/1+aZXKZevp3Tw4cXQwkZcxNnHi5+l1q2WAfzAT0bqhaSNob/DYD0LUe2Yxt1yNHxsF7s3XD6XjcH8GPt3aVsZ4YG3kJaP6vwFk2puL5wR2cF59ZSxtvLMwdsw1RC0sxTETVlrWjLGzgOvdLS9aYrVw1FSXU7MjALcLZj1sgs6hfbiyu63c9VzLEvVcyBCSEphCUrgKYwFd9IYRnRagoeM6LdqnTRbMvZ1m4qhcsItj0XC9KmyIuGRCw8pvGQVqgYpVvvQkPG8dJJVOsywbzcUxpsJo4bOdGJn9ZOHyQUOJwQRAPz3HJoCNpK2WoP8A8YBHm4Z9XfE9EZF8ccR+5FvNYAcAPwqyva0Oaywyi7j7oWEs26eyKN29qZNLk8OvoF6Mse4gEGGE3Lv+R/7+yY5RiGBxVUglaXw1DzcuaeXccyg6fBW0suaSV0riL6iw+XyXTUx3rpXng2zPU6lYV7MoDgNW/TmoXweO5ctdn55a1sAIRl0Fxw1UbsgHL5hzbzVw7I463txHUK72Nc0EG7T7L/yqlAS4ZRVBN4xG/mW+U/Lml1Zg1TA3PDeZg90eYenNMK6SqpGmURieJvtA6OZ69Eqw3bamnkmhNJUxzQ3zMcWkehvf9ELMUM8fH99FrpORVd4s8QrfFVk0+RrN44nK3gEMZlLTm0M3ijeIIzKN+hoAcBTOApTA4JjA/gu+sZRlbgoON63zqVFLysHvUvehpH2TQGwkst4prc0qMquye3NHTSugin04rXxHdJI6jutfE90lh9msU8ZnZvnAMvckpjVbRQU0W6omukkOmnM9yuUkqAeaikrm0tbFUOj3gjdmDOGqTRsfLZNO1aZMPoy+Z28xCqsHH3AeDB2+6OuKenjhv7Lczz1JXHUeLz4vj1PvyGRNJfkaegvqnG0OJCgw90rnDfSnyN55j+Eddr45zjuH+ESCSjjLTcSzvN+tjl+y3qwCB/cLT6hAbOeTDMKaeIpGSO+LgCf1JWEWIsqcSxakY65pzGWkHiQ0Zv1FllN+g9RLuKlkT/ac3My/+4cwrmd8URdE3eMOuTr1HxS/bN25FDKx1nh8mUjpofus8JxSKqtHI4MkPEX59QgWZ/lxMqWtp6sZ6aQO01YdHD0XA7TUcWF7awGnsI6yEEs906i30R20YbSYrMyOwvZ2h9m/ELlMQmLsToZMxLg86n0Qs2hnnynGj3Ta68VXf90FVzZKmZvR5+qHNR3T8EtGTp+6p4julj6juqeJHVHgPE0hksj4ZEmjkRcUvdXsKdRyrbepVHMtmzXU7GGPlQssio6S6wketC1L5FUSlYPes85VIBgydaCoSwPWgk0SWDsa6YrF8qx3io56XQCIa2WlnbNA7K9vA2uor8Sqa+czVUpkfawvwA6AckE91lg56aYjNvolBtnSUWAwAZn18NM2BsRabZm6BxPS1iuawfG5cPxIVjiZC4nei/tgm5/K53eaqRN3W4aVuduv47HaTaCLFJKdtKyRsMDCLyWBc42ubAnoP1SR9SeqW77Tiqum04ocC23K7GS1BJJJuepS6pfnqabtIqyTd0MyTNVQ398IZY/jRgjFZMmJVTekrvqgjMrY2+2L1g/7nfVAF6rJ0pMehTplTelDOeq50dDo/DlqySywCu1MlodHKiGSaIGNEt4KdKIz3VHFeHBQUpaycqFWcqLbBKsCqqRwQGpuqOKsVR3BaAykdZYPetZEO9VxNFS9RnVSqpztRIVR8ihZv4JdCq+QqtKc9XEOeYKr1NB/no/ilz/Wn0jHHf4vWf3SgLo3G/8AWKz+6UCmx9Q09JuoXl5ML//Z'}/>
      <InfoContent>
        <Info>
          <C2VText text={'카테고리'} type={'body'} weight={'700'}/>
        </Info>
        <Info>
          <C2VText text={'위치'} type={'body'} weight={700}/>
          <C2VText text={'dummy'} type={'label'} color={Color.gray3}/>
        </Info>
        <Info>
          <C2VText text={'발생 시간'} type={'body'} weight={700}/>
          <C2VText text={'dummy'} type={'label'} color={Color.gray3}/>
        </Info>
      </InfoContent>
      <InputContent>
        <C2VText text={'내용'} type={'body'} weight={700}/>
        <div style={{height: '4px'}}></div>
        <CTVInputArea placeholder={'내용을 입력하세요'} height={110} value={content} onChange={(i) => setContent(i.target.value)}/>
      </InputContent>
      <ButtonContainer>
        <CTVButton type={'red'}>
          <C2VText text={'신고 완료'} type={'label'} color={Color.white}/>
        </CTVButton>
      </ButtonContainer>
    </Container>
  );
}