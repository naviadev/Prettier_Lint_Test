import js from "@eslint/js";
import noConsole from "./lib/no-console.js";
import plzSemicolon from "./lib/plz-semicolon.js";
import importPlugin from 'eslint-plugin-import';
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";


export const customRules = {
  "no-console-club": noConsole,
  "plz-semicolon": plzSemicolon
};

export default [
  js.configs.recommended,
  {
    files: ["*/**.ts", "*/**.tsx"], // TypeScript 파일에 대해 설정을 적용
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json" // TypeScript 프로젝트의 tsconfig 파일 경로
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "import": importPlugin,
      "custom-rules": {
        rules: customRules
      }
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "no-unused-vars": "warn", // 사용되지 않는 변수를 허용하지 않음
      "no-undef": "warn", // 정의되지 않은 변수를 허용하지 않음
      "no-var": "warn", // var 대신 let 또는 const를 사용하도록 권장
      "prefer-destructuring": "warn", // 배열 및 객체 해체 할당을 권장
      "quotes": ["warn", "single"], // 문자열에 단일 인용 부호를 사용하도록 권장
      "prefer-template": "warn", // 문자열 연결 대신 템플릿 리터럴을 사용하도록 권장
      "func-style": ["warn", "expression"], // 함수 표현식을 사용하도록 권장
      "func-names": "warn", // 이름 없는 함수에 이름을 부여하도록 권장
      "no-param-reassign": "warn", // 함수 매개변수의 재할당을 허용하지 않음
      "function-paren-newline": ["warn", "consistent"], // 함수 괄호 뒤에 일관된 줄 바꿈을 요구
      "prefer-arrow-callback": "warn", // 콜백 함수에 화살표 함수를 사용하도록 권장
      "arrow-spacing": ["warn", { "before": true, "after": true }], // 화살표 함수의 화살표 전후에 공백을 요구
      "no-loop-func": "warn", // 루프 내에서 함수 선언을 허용하지 않음
      "implicit-arrow-linebreak": ["warn", "beside"], // 화살표 함수의 암시적 반환 뒤에 줄 바꿈을 허용하지 않음
      "no-dupe-class-members": "warn", // 클래스 멤버의 중복 정의를 허용하지 않음
      "class-methods-use-this": "warn", // 클래스 메서드에서 this를 사용하도록 요구
      "no-duplicate-imports": "warn", // 중복된 import를 허용하지 않음
      "import/no-mutable-exports": "warn", // 변경 가능한 export를 허용하지 않음
      "dot-notation": "warn", // 객체 속성 접근 시 점 표기법을 사용하도록 권장
      "nonblock-statement-body-position": ["warn", "beside"], // 블록이 아닌 문장의 위치를 규제
      "brace-style": ["warn", "1tbs"], // 일관된 중괄호 스타일을 요구 (one true brace style)
      "indent": ["warn", 2], // 들여쓰기를 2칸으로 설정
      "space-before-blocks": "warn", // 블록 앞에 공백을 요구
      "keyword-spacing": ["warn", { "before": true, "after": true }], // 키워드 앞뒤에 공백을 요구
      "space-infix-ops": "warn", // 중위 연산자 주위에 공백을 요구
      "eol-last": "warn", // 파일의 끝에 줄 바꿈을 요구
      "newline-per-chained-call": ["warn", { "ignoreChainWithDepth": 2 }], // 체인된 호출에 대한 줄 바꿈을 요구
      "no-whitespace-before-property": "warn", // 속성 앞에 공백을 허용하지 않음
      "arrow-parens": ["warn", "as-needed"], // 필요할 때만 화살표 함수의 매개변수에 괄호를 사용
      "default-param-last": "warn", // 기본 매개변수를 마지막에 배치하도록 요구
      "padded-blocks": ["warn", "never"], // 블록 안에 공백을 허용하지 않음
      "no-multiple-empty-lines": ["warn", { "max": 1 }], // 여러 개의 빈 줄을 허용하지 않음
      "space-in-parens": ["warn", "never"], // 괄호 안에 공백을 허용하지 않음
      "comma-spacing": ["warn", { "before": false, "after": true }], // 쉼표 주위에 공백을 요구
      "id-length": ["warn", { "min": 2 }], // 식별자의 최소 길이를 설정
      "camelcase": "warn", // 카멜케이스를 사용하도록 요구
      "new-cap": "warn", // 생성자 함수는 대문자로 시작하도록 요구
      "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }], // 객체 리터럴의 키와 값 사이에 공백을 요구
      "space-before-function-paren": ["warn", "never"], // 함수 괄호 앞에 공백을 허용하지 않음
      "template-curly-spacing": ["warn", "never"], // 템플릿 리터럴의 중괄호 안에 공백을 허용하지 않음
      "object-shorthand": "warn", // 객체 리터럴에서 속기법을 사용하도록 권장
      "custom-rules/no-console-club": "warn", // 커스텀 규칙: console.log 사용 금지
      "custom-rules/plz-semicolon": "warn", // 커스텀 규칙: 세미콜론 사용을 요구
    }
  }
];
