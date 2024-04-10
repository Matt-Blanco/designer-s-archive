export function Map(props) {

  const getClassNames = (country) => {
    const classes = ['cls-1']
    if (props.selectedCountries.includes(country) || props.selectedCountries.length <= 0) {
      classes.push('selectedCountry')
    } else {
      classes.push('notSelectedCountry')
    }

    if (props.hoverCountry === country) {
      classes.push('hoverCountry')
    } else if (props.hoverCountry !== undefined) {
      classes.push('notHoverCountry')
    }

    return classes.join(' ')
  }

  return (
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 729.5 483.36">D
      <g id="Layer_1-2" data-name="Layer 1">
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("AT")} onPointerDown={() => props.updateCountries("AT")} className={getClassNames("AT")} id="AT" class="cls-1" d="m673.79,196.07l-.5,1.32,1.16,3.47-.33,4.3h-4.63l1.82,2.31-2.15,6.61-1.49,1.82-7.27.17-3.97,2.48-6.94-.83-12.07-2.81-2.15-3.47-8.1,1.82-.83,1.98-5.12-1.49-4.3-.33-3.8-1.98,1.16-2.48-.33-1.82,2.31-.5,4.46,2.81.99-2.81,7.27.5,5.79-1.82,3.97.33,2.81,2.15.66-1.82-1.65-6.78,2.81-1.32,2.64-4.79,6.28,3.47,4.3-4.3,2.81-.83,6.61,3.14,3.8-.5,3.97,1.98h0Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("BE")} onPointerDown={() => props.updateCountries("BE")} className={getClassNames("BE")} id="BE" class="cls-1" d="m584.36,173.42l-.66,6.94-2.15.33-.66,5.79-7.27-4.79-4.13.83-5.79-4.79-3.97-4.13-3.64-.17-1.32-3.64,6.45-1.98,5.95.83,7.44-2.15,5.12,4.46,4.63,2.48h0Z" />
        <path class="cls-1" d="m329.9,149.2l3.4.9,4.7-.2-3.3,2.6-2,.4-5.5-2.7-.6-2.1,2.5-1.9.8,3Z" />
        <path class="cls-1" d="m39.09,147.12l-3.33.97-6.77-3.01v-2.36l-3.12-2.36.32-1.93-4.62-1.18.64-3.65,1.61-1.5,4.41,1.4,2.58,1.07,4.41.64.22,2.36.43,3.12,3.44,2.79-.22,3.65Z" />
        <path class="cls-1" d="m298.9,54.5l-3.6,3-1.7-.5-.1-1.7.4-.4,2.8-1.7,1.7.1.5,1.2Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("CA")} onPointerDown={() => props.updateCountries("CA")} id="CA" className={getClassNames("CA")} d="m332.66,169.91l-2.36-3.87,3.12-9.14-1.72-1.93-3.98,1.07-1.18-1.72-5.91,5.05-3.44,5.27-3.01,3.12-2.69,1.07-1.83.32-1.18,1.61h-10l-8.38.11-2.9,1.18-7.31,4.73v-.11l-.97-.43-2.15.97-2.04,1.4-1.93-1.18-5.05.86-4.19.97-2.04.86-2.47,2.26,1.93.75,1.83-.43h.32l-.32,2.04-5.16.75-3.01.86-1.83,1.07-2.79-.64-1.72.32-3.12,1.93-4.94,2.15-2.9-.43,2.15-2.36,3.98-3.76,4.41-2.26,1.18-1.93.97-3.22,4.08-3.76.97-4.3,1.18,4.19,4.08.97,2.58-2.26-1.5-5.16-.97-2.15-4.3-1.29-4.08-.75h-4.19l-3.65-.86-.43-1.5-1.5.97-1.29-.21,2.04-2.26-1.93-.86,2.04-2.58-1.29-1.93,1.83-1.93-5.59-.97-.11-3.87-.86-.86-3.55-.22-4.41-1.29-1.61.86-1.93,1.61-3.55,1.07-3.33,2.69-5.8-1.83-4.73.86-4.19-2.04-4.94-1.07-3.55-.43-1.07-1.07.97-3.65h-1.83l-1.4,2.58H44.04l-5.8-6.56-1.72-2.9-7.52-2.79,1.4-5.91,3.87-3.98-4.41-2.9,3.33-5.27-2.26-4.73,2.69-3.44,5.48-3.12,3.44-4.08-4.94-4.08,1.5-7.42,1.18-4.51-1.72-2.9-.86-2.58.64-3.33-6.99,2.04-8.17,3.55-.32-4.08-.54-2.79-3.01-1.72-4.51-.21,38.27-35.15,26.44-21.93,6.45,1.4,3.55,2.79,3.98.54,6.77-2.36,7.52-1.83,5.7.64,9.57-2.47,8.81-1.4.21,2.36,4.84-1.4,4.19-2.69,2.26.64,1.5,5.16,10.21-3.98-4.19,4.41,6.45-.97,3.44-1.61,4.94.32,4.19,2.36,8.06,2.15,5.05.97,4.73-.32,3.12,3.01-9.14,2.9,6.88,1.18,12.79-.64,4.73-1.07,1.5,3.55,7.63-2.9-2.26-2.58,4.84-1.93,5.59-.32,4.19-.54,2.26,1.4,1.61,3.12,5.37-.43,5.7,2.69,7.74-.97,6.45.11,2.58-3.65,4.84-.97,5.27,1.93-4.62,5.59,6.66-4.73,3.44.21,6.88-5.91-1.72-3.55-3.12-2.36,5.91-6.34,8.81-4.08,4.84.97,2.15,2.47.43,6.45-6.23,2.79,7.2,1.18-4.73,5.91,9.57-4.51,2.36,3.76-4.62,4.3,1.4,3.98,7.85-4.19,6.99-5.16,5.05-6.34,5.91.43,5.8.86,3.87,2.9-1.83,2.9-5.48,3.12.97,3.12-2.58,2.9-11.72,4.19-6.99.97-3.44-1.83-3.55,3.01-7.95,5.05-3.22,2.69-8.28,4.08-6.99.43-5.48,2.58-3.12,4.08-6.13.75-9.35,5.05-10.1,6.99-5.37,4.94-5.27,7.42,6.45,1.07-1.61,5.91-.86,4.94,7.85-1.29,7.52,2.79,3.55,2.47,1.83,3.01,5.27,1.83,3.87,2.69,8.17.43,5.16.64-3.87,5.59-1.83,6.56.11,7.42,4.73,6.34,5.05-2.15,6.02-6.88,2.47-10.32-1.83-3.44,9.67-3.12,8.06-4.51,5.16-4.51,1.83-4.3-.43-5.48-3.44-4.84,9.57-6.66,1.07-5.7,4.19-9.67,4.08-1.5,7.2,1.72,4.51.64,4.84-1.72,3.33,2.15,3.87,3.65.22,2.36,8.28.54-2.79,5.27-2.47,7.95,4.08,1.07,1.72,3.76,8.81-3.55,8.06-7.09,4.51-2.9,1.18,5.7,2.79,8.06,2.15,7.74-3.65,4.08,5.16,3.65,3.12,3.65,7.42,1.72,2.58,2.04v5.59l3.65.86,1.18,2.47-2.15,7.42-4.62,2.47-4.51,2.36-9.46,2.36-8.49,5.37-9.24,1.18-10.86-1.5h-7.85l-5.7.43-6.13,4.84-7.95,3.01-10.86,8.81-8.49,6.23,5.05-1.07,11.72-8.92,13.22-5.59,8.17-.64,3.55,3.33-6.56,4.51-.65,7.2.11,5.16,6.02,3.33,9.24-.97,7.74-7.63-1.07,4.94,2.69,2.47-7.95,4.41-13.33,4.08-6.23,2.69-7.74,4.94-3.98-.54,1.61-5.7,11.18-5.7-8.71.21-6.34.86Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("CH")} onPointerDown={() => props.updateCountries("CH")} id="CH" className={getClassNames("CH")} d="m613.95,207.15l.33,1.82-1.16,2.48,3.8,1.98,4.3.33-.5,4.13-3.47,1.82-6.28-1.32-1.65,4.13-3.97.33-1.49-1.65-4.46,3.64-4.13.5-3.64-2.31-2.98-4.46-3.97,1.65v-4.79l5.95-5.79-.33-2.64,3.8.99,2.15-1.82h6.94l1.65-2.15,9.09,3.14h0Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("CZ")} onPointerDown={() => props.updateCountries("CZ")} id="CZ" className={getClassNames("CZ")} d="m655.77,170.28l4.13,3.31,6.12.83-.33,2.81,4.63,2.15.99-2.64,5.62,1.16,1.16,3.31,6.12.5,4.3,5.12h-2.48l-1.16,1.82-1.82.5-.33,2.31-1.49.5-.17.99-2.64.99-3.64-.17-.99,2.31-3.97-1.98-3.8.5-6.61-3.14-2.81.83-4.3,4.3-6.28-3.47-4.96-4.3-4.3-2.48-1.16-4.46-1.65-2.98,5.62-2.15,2.81-2.64,5.79-1.98,1.82-1.98,2.15,1.16,3.64-.99h0Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("DE")} onPointerDown={() => props.updateCountries("DE")} id="DE" className={getClassNames("DE")} d="m646.19,143.34l2.31,5.12-1.98,2.81,3.14,3.47,2.48,5.45-.33,3.64,3.97,6.45-3.64.99-2.15-1.16-1.82,1.98-5.79,1.98-2.81,2.64-5.62,2.15,1.65,2.98,1.16,4.46,4.3,2.48,4.96,4.3-2.64,4.79-2.81,1.32,1.65,6.78-.66,1.82-2.81-2.15-3.97-.33-5.79,1.82-7.27-.5-.99,2.81-4.46-2.81-2.31.5-9.09-3.14-1.65,2.15h-6.94l.66-7.44,3.97-6.94-11.9-1.98-3.97-2.64.33-4.46-1.65-2.31.66-6.94-1.82-10.74h4.79l1.98-3.8,1.49-9.26-1.49-3.47,1.32-2.15,6.61-.5,1.65,2.15,5.12-4.96-2.15-3.8-.66-5.62,6.12,1.32,4.79-1.49.5,3.8,8.1,2.31.17,3.64,7.77-1.98,4.3-2.64,9.26,3.97,3.97,3.14h0Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("UK")} onPointerDown={() => props.updateCountries("UK")} id="UK" className={getClassNames("UK")} d="m485.51,142.18l-5.79-1.98-4.96.17,1.98-5.45-1.49-5.29,6.61-.5,8.1,6.28-4.46,6.78Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("UK")} onPointerDown={() => props.updateCountries("UK")} id="UK-2" data-name="UK" className={getClassNames("UK")} d="m511.8,94.74l-8.43,10.74,7.77-1.32h8.43l-2.15,8.1-7.11,8.93,8.1.5.5,1.16,6.94,11.74,5.29,1.65,4.79,11.57,2.31,3.97,9.75,1.82-.99,6.61-3.97,2.98,3.14,5.29-7.27,5.29-10.74-.17-13.89,2.98-3.64-2.15-5.45,4.79-7.44-1.16-5.95,3.97-4.13-1.98,12.07-10.74,7.27-2.31-12.56-1.65-2.15-4.13,8.43-3.14-4.13-5.45,1.65-6.61,11.74.99,1.32-5.95-5.12-6.12-.17-.17-9.42-1.82-1.82-2.64,2.98-4.46-2.48-2.81-4.3,4.79-.17-9.75-3.64-4.96,3.14-10.25,6.28-7.93,5.95.66,9.26-.83Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("IE")} onPointerDown={() => props.updateCountries("IE")} id="IE" className={getClassNames("IE")} d="m485.51,142.18l1.16,7.27-6.45,9.09-14.55,5.95-11.24-1.49,7.11-10.58-3.47-10.25,11.08-7.93,6.12-4.63,1.49,5.29-1.98,5.45,4.96-.17,5.79,1.98h0Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("IS")} onPointerDown={() => props.updateCountries("IS")} id="IS" className={getClassNames("IS")} d="m472.27,30.27l-2.01,5.16,6.3,5.44-8.74,6.16-18.77,5.59-5.59,1.58-8.02-1.29-17.05-2.58,6.88-3.58-12.89-3.87,11.32-1.58.14-2.44-12.61-1.86,5.16-5.3,9.46-1.15,8.6,5.44,10.03-4.3,7.31,2.15,10.46-4.15,10.03.57h0Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("IT")} onPointerDown={() => props.updateCountries("IT")} id="IT" className={getClassNames("IT")} d="m669.82,304.51l-2.81,8.43,1.49,3.14-1.49,5.45-6.94-3.97-4.46-1.16-12.4-5.29.83-5.45,10.25.99,8.93-1.16,6.61-.99Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("IT")} onPointerDown={() => props.updateCountries("IT")} id="IT-2" data-name="IT" className={getClassNames("IT")} d="m613.62,273.1l5.45,7.44-.66,14.05-3.97-.66-3.47,3.47-3.31-2.81-.83-12.73-2.15-5.95,4.79.5,4.13-3.31Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("IT")} onPointerDown={() => props.updateCountries("IT")} id="IT-3" data-name="IT" className={getClassNames("IT")} d="m649.49,217.72l-.66,5.12,2.31,4.46-6.78-1.65-6.45,3.8.66,5.12-.83,2.98,3.14,5.29,8.26,5.29,4.79,8.76,10.08,8.43,6.61-.17,2.31,2.31-2.31,2.15,7.93,3.8,6.61,3.14,7.77,5.62.99,1.82-1.32,3.8-5.12-4.96-7.6-1.65-3.14,6.78,6.45,3.97-.66,5.45-3.47.66-4.13,9.09-3.64.83-.17-3.31,1.49-5.62,1.82-2.31-3.8-6.12-2.98-5.29-3.64-1.32-2.98-4.46-5.62-1.98-3.97-4.3-6.28-.66-7.11-4.63-8.1-6.94-6.12-5.95-3.14-10.41-4.3-1.16-6.94-3.47-3.8,1.32-4.79,4.96-3.47.66.83-4.46-4.63-1.32-2.48-8.1,2.81-3.14-2.48-3.97.17-2.98,3.64,2.31,4.13-.5,4.46-3.64,1.49,1.65,3.97-.33,1.65-4.13,6.28,1.32,3.47-1.82.5-4.13,5.12,1.49.83-1.98,8.1-1.82,2.15,3.47,12.07,2.81Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("LU")} onPointerDown={() => props.updateCountries("LU")} id="LU" className={getClassNames("LU")} d="m585.02,187.14l-2.31.17-1.82-.83.66-5.79,2.15-.33,1.65,2.31-.33,4.46Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("MA")} onPointerDown={() => props.updateCountries("MA")} id="MA" className={getClassNames("MA")} d="m515.43,336.9l3.14,6.78.5,6.45,3.14,11.24,2.31,2.31-1.65,4.13-11.74,1.82-4.13,3.8-5.12.99-.5,7.93-10.58,4.13-3.47,5.29-7.44,2.81-8.93,1.65-14.71,7.93-.17,12.56h-1.49l.17,5.62-5.62.33-2.98,2.48h-4.13l-3.31-1.49-7.6,1.16-3.14,8.26-2.98.83-4.46,13.39-13.06,11.41-3.31,14.71-3.97,4.79-1.16,3.8-20.66.83h-.17l.5-4.96,3.64-2.81,3.14-5.62-.5-3.64,3.31-7.44,5.29-6.78,3.14-1.65,2.64-6.12.33-5.79,3.47-6.45,6.28-3.97,5.95-10.74.17-.17,4.79-4.13,8.43-1.16,7.27-7.27,4.63-2.81,7.77-8.93-1.98-13.06,3.64-9.26,1.49-5.62,5.95-7.11,8.93-4.79,6.78-4.46,6.12-10.91,2.98-6.61,6.45.17,5.12,4.46,8.43-.66,9.09,2.31h3.97Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("PL")} onPointerDown={() => props.updateCountries("PL")} id="PL" className={getClassNames("PL")} d="m689.16,136.56l9.75,1.16,14.55-.17,4.13,1.16,2.31,3.14.99,4.46,2.81,3.8.66,3.97-4.63,2.15,3.14,4.63.83,4.63,5.29,8.93-.5,2.81-3.8,1.16-6.28,8.6,2.64,4.63-1.82-.66-8.26-3.97-5.79,1.49-3.97-.99-4.63,2.15-4.46-3.64-3.14,1.49-.5-.66-4.3-5.12-6.12-.5-1.16-3.31-5.62-1.16-.99,2.64-4.63-2.15.33-2.81-6.12-.83-4.13-3.31-3.97-6.45.33-3.64-2.48-5.45-3.14-3.47,1.98-2.81-2.31-5.12,5.12-2.98,11.74-4.63,9.59-3.31,7.93,1.65.99,2.48h7.6Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("SI")} onPointerDown={() => props.updateCountries("SI")} id="SI" className={getClassNames("SI")} d="m672.47,217.72l-6.45,2.81-.5,4.13-2.81,1.16.17,2.81-3.31-.17-2.98-1.65-1.32,1.65-5.95-.33,1.82-.83-2.31-4.46.66-5.12,6.94.83,3.97-2.48,7.27-.17,1.49-1.82,1.32.17,1.98,3.47h0Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("NL")} onPointerDown={() => props.updateCountries("NL")} id="NL" className={getClassNames("NL")} d="m584.36,173.42l-4.63-2.48-5.12-4.46-7.44,2.15-5.95-.83,4.13-2.81,6.61-14.88,10.74-4.3,6.61.33,1.49,3.47-1.49,9.26-1.98,3.8h-4.79l1.82,10.74h0Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("PT")} onPointerDown={() => props.updateCountries("PT")}id="PT" className={getClassNames("PT")} d="m469.32,316.57l-3.64,2.64-4.63-1.49-4.46,1.16,1.49-8.26-.5-6.45-3.97-.99-1.82-3.97.83-6.94,3.64-3.8.83-4.3,1.98-6.28v-4.46l-1.49-3.8-.33-3.64,3.14-2.64,3.64-1.49,1.98,5.12h4.96l1.49-1.32,5.12.33,2.15,5.29-3.97,2.81-.5,8.26-1.32,1.49-.5,5.12-3.8.83,3.31,6.28-2.64,6.94,2.98,3.14-1.32,2.81-3.31,3.97.66,3.64h0Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("ES")} onPointerDown={() => props.updateCountries("ES")} id="ES" className={getClassNames("ES")} d="m518.41,249.96l3.31,3.97,15.7,4.79,3.14-2.31,9.59,4.79,9.75-1.32.66,6.12-8.1,6.94-10.91,2.31-.83,3.47-5.29,5.79-3.31,8.6,3.31,6.12-4.96,4.63-1.98,6.94-6.61,2.15-6.12,8.1-11.24.17-8.26-.17-5.62,3.64-3.47,3.97-4.3-.83-3.14-3.64-2.31-5.95-8.1-1.65-.66-3.64,3.31-3.97,1.32-2.81-2.98-3.14,2.64-6.94-3.31-6.28,3.8-.83.5-5.12,1.32-1.49.5-8.26,3.97-2.81-2.15-5.29-5.12-.33-1.49,1.32h-4.96l-1.98-5.12-3.64,1.49-3.14,2.64.83-7.44-3.31-4.46,12.23-7.6,10.25,1.82h11.41l8.93,1.82,7.11-.66,13.72.5h0Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("FR")} onPointerDown={() => props.updateCountries("FR")} id="FR" className={getClassNames("FR")} d="m616.1,263.18l-2.48,8.1-3.97-2.15-2.15-6.94,1.49-3.97,5.29-3.97,1.82,8.93Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("FR")} onPointerDown={() => props.updateCountries("FR")} id="FR-2" data-name="FR"className={getClassNames("FR")} d="m580.89,186.48l1.82.83,2.31-.17,3.97,2.64,11.9,1.98-3.97,6.94-.66,7.44-2.15,1.82-3.8-.99.33,2.64-5.95,5.79v4.79l3.97-1.65,2.98,4.46-.17,2.98,2.48,3.97-2.81,3.14,2.48,8.1,4.63,1.32-.83,4.46-7.44,5.95-16.86-2.81-12.23,3.47-.99,6.28-9.75,1.32-9.59-4.79-3.14,2.31-15.7-4.79-3.31-3.97,4.46-6.28,1.65-20.83-8.43-10.91-6.12-5.29-12.56-3.97-.66-7.6,10.74-2.15,13.72,2.64-2.48-11.74,7.77,4.46,18.84-7.93,2.48-8.43,6.94-2.15,1.32,3.64,3.64.17,3.97,4.13,5.79,4.79,4.13-.83,7.27,4.79Z" />
        <path onPointerOut={() => props.updateHoverCountry()} onPointerOver={() => props.updateHoverCountry("US")} onPointerDown={() => props.updateCountries("US")} id="US" className={getClassNames("US")} d="m218.72,150.56l-6.56,2.15-5.05,2.69-4.94,2.9-.54.97,6.13-1.4,2.26,2.26,4.94-1.61,5.27-2.26,5.8-2.26-3.33,3.55,2.69.86,2.69,2.58,5.48-1.5,5.48-.54.32,1.93,1.61.21,1.29.21,1.61,2.69-5.05.64h-.11l-3.98-.75-4.84,1.29-3.98.64-5.05,4.41-3.22,2.47.43.75,5.91-4.41h.75l-5.05,5.27-3.12,4.73-2.69,3.87-.64,3.33-.86,1.61-.64,1.83.11,3.55.32.54,1.93-.11,1.72-.75,1.5-.86,3.55-3.33,1.93-4.51-.11-4.19,1.5-2.9,2.79-3.33,2.26-2.36,2.9-1.61-.43,2.26,2.36-3.33,1.4-.64,1.83-2.58,4.08,1.4,3.01,2.58-.86,3.12-1.72,3.12-4.08,2.69-.43,1.72h1.07l4.62-2.9,1.72.64-.54,3.98-.75,2.79-3.98,3.76-2.15,2.36-2.9,2.58,2.9,1.4,2.69.43,4.3-.97,3.98-1.83,3.22-.97,4.94-1.93,6.23-4.08.11-.64.32-2.04,2.9-.86,4.19.32,4.3.54,4.94-2.26.64-2.69-.21-.97,7.31-4.73,2.9-1.18,8.38-.11h10l1.18-1.61,1.83-.32,2.69-1.07,3.01-3.12,3.44-5.27,5.91-5.05,1.18,1.72,3.98-1.07,1.72,1.93-3.12,9.14,2.36,3.87.22,2.26-6.88,3.22-6.45,2.36-6.45,2.04-4.3,4.08-1.4,1.5-1.29,3.65.75,3.55,2.26.21.22-2.47,1.18,1.5-1.07,1.93-4.08,1.07-2.69-.11-4.51,1.18-2.47.32-3.33.32-5.37,2.04,8.71-1.29,1.18,1.29-8.49,2.04h-3.55l.43-.86-2.26,1.93,1.5.32-2.69,4.94-5.7,5.27.11-1.83-1.18-.32-1.29-1.72v3.76l1.07,1.18-.65,2.58-2.58,2.69-4.84,5.48-.43-.21,3.12-4.73-2.15-2.58,1.07-5.8-2.04,3.01v4.41l-3.44-1.07,3.22,2.15-1.61,6.56,1.5.54v2.36l-1.07,6.88-4.94,5.05-6.56,2.04-4.73,4.08-3.01.43-3.65,2.58-1.4,2.26-7.42,4.51-4.08,3.33-3.76,4.08-2.04,4.84v4.84l.65,5.91,1.61,4.84-.54,3.01,1.4,7.95-1.07,4.73-.65,2.69-2.15,4.19-1.93.86-2.79-.86-.43-3.01-1.93-1.61-2.15-5.91-1.72-5.27-.43-2.69,2.15-4.62-.86-3.76-3.33-5.8-2.04-1.07-6.56,3.22-.97-.43-2.15-3.22-3.22-1.72-6.88.97-4.94-.86-4.62.54-2.69,1.07.64,1.83-.75,2.79.86,1.4-1.29.86-1.93-.97-2.47,1.29-4.19-.21-3.55-3.65-5.27.86-3.87-1.61-3.76.54-5.37,1.61-6.56,5.05-6.56,3.01-3.98,3.22-2.04,3.12-1.07,4.84-.43,3.22.64,2.36-2.36.21-3.87-1.5-4.19-2.15-.97-3.22-.21-4.84-2.58-3.87-.97-4.08-1.72-4.73-3.44-2.79-4.84.21-5.16,5.37-4.3-2.04-2.47-2.04-.43-3.87-.86-3.55-2.58-3.01-2.26-2.26-1.4-2.47h-10.1l-.86,2.9h-16.23l-11.72-4.84-7.52-3.33.97-1.4-7.63.75-6.77.54.32-3.44-2.26-3.98-2.36-.86.11-1.93-3.12-.43-1.29-1.83-5.16-.64-.97-1.18.86-3.76-2.69-6.88-.54-9.57.97-1.61-1.4-2.26-1.61-5.8,1.93-5.59-.97-3.76,4.19-5.7,3.01-5.8,1.18-5.27,5.91-6.45,4.3-6.13,4.3-6.13,4.62-9.14,1.93-5.7.43-3.12,1.5-1.4,6.23,2.36-1.07,6.34,2.36-1.83,2.69-5.48,1.72-5.48h147.38l1.4-2.58h1.83l-.97,3.65,1.07,1.07,3.55.43,4.94,1.07,4.19,2.04,4.73-.86,5.8,1.83Z" />
      </g>
    </svg>
  )
}