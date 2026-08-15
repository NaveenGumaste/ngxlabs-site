export function ThemeScript() {
  const code = `try{var t=JSON.parse(localStorage.getItem('ngx-ui')||'{}').state;var m=t&&t.theme;var d=m==='dark'||(m!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}`;
  return (
    <script
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
