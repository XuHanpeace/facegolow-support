import React from 'react';
import './App.css';

function App() {
  const handleAppStoreClick = () => {
    // App Store 链接，需要替换为实际的链接
    window.open('https://apps.apple.com/app/faceglow', '_blank');
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="logo-container">
              <div className="logo-placeholder">
                <span className="logo-text">FG</span>
              </div>
            </div>
            <h1 className="hero-title">FaceGlow</h1>
            <p className="hero-subtitle">专业的 AI 照片处理应用</p>
            <p className="hero-description">
              通过先进的 AI 技术，帮助您轻松创作出精美的照片作品，记录生活中的美好瞬间
            </p>
            <button className="app-store-button" onClick={handleAppStoreClick}>
              <svg className="app-store-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span>在 App Store 下载</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">核心功能</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">AI 智能美化</h3>
              <p className="feature-description">
                先进的 AI 技术，一键智能美化照片，让每一张照片都更加精美
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3 className="feature-title">个性化相册创作</h3>
              <p className="feature-description">
                丰富的相册模板，轻松创作个性化相册，记录生活中的美好瞬间
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">作品分享与管理</h3>
              <p className="feature-description">
                便捷的作品管理功能，轻松保存和分享您的创作成果
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3 className="feature-title">自拍照管理</h3>
              <p className="feature-description">
                智能管理您的自拍照，支持多张自拍切换，打造专属头像
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3 className="feature-title">会员特权</h3>
              <p className="feature-description">
                尊享会员特权，解锁全部高级功能，享受更优质的服务体验
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3 className="feature-title">实时同步</h3>
              <p className="feature-description">
                云端同步，随时随地访问您的作品，永不丢失
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">立即体验 FaceGlow</h2>
          <p className="cta-description">
            下载应用，开启您的 AI 照片处理之旅
          </p>
          <button className="app-store-button large" onClick={handleAppStoreClick}>
            <svg className="app-store-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <span>在 App Store 下载</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2025 FaceGlow. All rights reserved.</p>
          <p className="footer-text">备案号：沪ICP备2025152989号-1A</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

