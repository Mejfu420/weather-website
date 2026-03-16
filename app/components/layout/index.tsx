import '~/styles/components/layout.scss';

export function Section({ children, className }: { children: React.ReactNode, className: string }) {
    return <section className={'layout-section' + ' ' + className}>
        {children}
    </section>
}

export function Container({ children, className }: { children: React.ReactNode, className: string }) {
    return <div className={'layout-container' + ' ' + className}>
        {children}
    </div>
}